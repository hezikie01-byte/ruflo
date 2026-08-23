<!-- jarvis-copilot-instructions -->
Jarvis reaches systems you cannot: Azure DevOps (work items, pipelines, Azure Repos PRs), Jira, Figma, and the user's assigned work. When a question is about any of them, call the matching Jarvis tool instead of answering from the repository, git history, or assumption — and never use gh, az, curl, a browser, or any shell command to reach them:
- pipelines / builds / CI / releases / deployments / "why is the build red" -> jarvis_get_pipelines
- "what am I working on" / my tasks / my tickets / PRs awaiting my review -> jarvis_list_my_work
- a work item, Jira issue, or GitHub issue by id -> jarvis_get_task_context
- any figma.com link, "build this screen", "match the design" -> jarvis_get_figma_design
- "create a task/story/bug", "raise a ticket", "break this down into sub-tasks" -> jarvis_create_work_item
- "move it to Done", "assign it to me", "comment on PROJ-1" -> jarvis_update_work_item
- "where does X live", or any task in this repo, BEFORE exploring -> jarvis_get_repo_map
- starting ANY task in this repo, before you explore the codebase -> jarvis_recall_similar_tasks
- a failure that looks familiar -> jarvis_get_lessons
If the tool you need is missing from your picker, name it, tell the user to enable it (#jarvisPipelines, #jarvisMyWork, #jarvisFigma, #jarvisTask, #jarvisCreateWorkItem), and stop — a missing tool is not permission to guess. If a tool reports that a source is disabled or disconnected (e.g. Azure DevOps off, Jira not connected), relay that and the setting to change rather than working around it.

Orientation protocol — do NOT re-read this repository on every task. Two calls first, every time:
I. jarvis_get_repo_map — structure, stack, entry points, test locations, and the files past tasks changed most.
II. jarvis_recall_similar_tasks — the files and solution from a similar past task, if there is one.
Then search TARGETED, inside the folder the map pointed at. Do NOT: list the directory tree; read package.json/README/config to work out what the project is; grep broadly when the map named a folder; open files "to get oriented"; or re-derive the same orientation later in the conversation.
QUALITY OVERRIDES SPEED: the map is orientation, not evidence. Never edit a file whose current contents you have not read. If the map or a recalled task disagrees with the code, trust the code, say so, and solve fresh. Spend the saved tokens on reading the right files properly, checking edge cases, and running the tests — not on finishing sooner with less certainty. If the map is thin, explore normally and save the task afterwards so the next run is not starting from zero.

Task memory — check before you explore, save after the PR:
i. At the START of any task in this repository, call jarvis_recall_similar_tasks with the task title, BEFORE you grep, list directories, or read files.
ii. A hit returns the files edited last time — open those first. It also returns how it was solved, so you do not re-reason a decision already made. This is the main way token spend comes down over time.
iii. Treat a hit as a recommendation, not an instruction: it is a similar task, not the same one. Verify against the current code and solve fresh if it has moved on. Never copy a past solution blind.
iv. A miss costs nothing — carry on normally.
v. AFTER the pull request is open, call jarvis_save_task_memory with title, solution (what actually fixed it, not a restatement of the request), filesChanged, and the PR URL and branch. The developer sees a summary and can decline; if they decline, do not ask again for that task.
vi. Memory is off by default. If the tools say so, tell the developer to set jarvis.memory.enabled — do not work around it and do not invent a memory of your own.

Creating or updating work items (Azure Boards / Jira) — both are user-confirmed writes to a shared board:
a. Call jarvis_describe_tracker_schema FIRST (workItemType for Azure DevOps, projectKey for Jira) unless you have already seen that exact schema in this conversation. Required fields differ per project AND per item type; guessing produces an opaque rejection.
b. Then call jarvis_get_lessons with category work-items — past rejections in this workspace are recorded there.
c. Then call jarvis_create_work_item. Never invent titles, descriptions, or acceptance criteria — they come from the user or a source document; if you do not have them, ask.
d. Breaking work down: create the parent first, then pass parentId (Azure DevOps) or parentKey (Jira) so children are linked as they are created. If the user asks for several items, list them and get approval before you start.
e. On rejection: do not retry the identical call. The failure names the offending field and includes a ready-to-fill jarvis_record_lesson payload — fix the field (or re-read the schema), retry once, and record the lesson with the fix filled in. A permissions failure is not a field problem: report it and stop.
f. There is no delete tool by design. Removal is a state change: state=Removed (Azure DevOps) or a transition to Done/Cancelled (Jira) via jarvis_update_work_item.

When the user asks about Azure DevOps, Jira, Figma, or implementing a work item:
1. Call jarvis_get_task_context before proposing code. Do not invent ticket details.
2. Call jarvis_get_guidance for Jarvis workflow rules (including the bug-fix playbook).
3. Prefer Jarvis LM tools first. Use Azure DevOps (Jarvis) MCP tools only if they appear in the tool picker — Jarvis registers them when auth is pat or azcli. Do not ask the user to install a separate Azure DevOps MCP server.
4. When implementing or fixing a work item/ticket: restate goal + acceptance criteria; if vague/empty STOP and ask the user. Search/read code before edits; state root cause before coding. Minimal fix only; map each change to an AC bullet; run relevant tests/lint.
5. When opening a PR on a GitHub remote you MUST use jarvis_create_pull_request (#jarvisCreatePr / Jarvis: Create Pull Request). Never use gh pr create, gh, or any shell/run_in_terminal to open a PR. Never use ADO repo_create_pull_request for GitHub repos. If jarvis_create_pull_request is missing: STOP, tell the user to enable Jarvis: Create Pull Request and sign in to GitHub in VS Code if prompted — do not open the PR another way. GitHub (Jarvis) MCP create_pull_request is optional only if present; prefer the LM tool.
6. For full proposal + Accept/PR via Jarvis, tell the user to use @jarvis.
7. Learn from past failures. The lessons index (.github/instructions/jarvis-lessons.instructions.md) lists categories only; the entries live in .jarvis/lessons/<category>.md. Before retrying anything that just failed (push, build, tests, auth, PR creation), call jarvis_get_lessons with the matching category and apply the recorded fix instead of guessing — fetch one category, not all of them. After you resolve a non-obvious failure, call jarvis_record_lesson with title, category, trigger (command/error), cause, fix, and tags — record the reusable lesson, not the incident. Never put secrets, tokens, or customer data in a lesson.
8. When the user says "add this to your learning", "remember this", "save this as a lesson", "learn from this", or "don't do this again", call jarvis_record_lesson immediately using what is already in the conversation — do not just agree in prose. If the fix is not established yet, ask one short question for it first. If the tool is unavailable, say so and point them at Jarvis: Add Lesson.
<!-- /jarvis-copilot-instructions -->
