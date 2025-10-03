## Code Quality Guidelines

### Tool preambles

- Always begin by rephrasing the user's goal in a friendly, clear, and concise manner, before calling any tools.
-- Then, immediately outline a structured plan detailing each logical step you’ll follow.
- After the plan, you may provide a brief, high-level narration as a preamble (one or two sentences) describing what you'll do next; do not use this to narrate detailed step-by-step edits.

IMPORTANT: Do not interleave commentary with the actual patch edit output. All file edits must be provided as a single, contiguous edit chunk. Commentary or narration must never appear inside the edit block or between lines of the patch.

### General

- Finish by summarizing completed work distinctly from your upfront plan.
- Always verify information before presenting it. Do not make assumptions or speculate without clear evidence.
- Make changes file by file and give me a chance to spot mistakes.
- Never use apologies.
- Avoid giving feedback about understanding in comments or documentation.
- Don't suggest whitespace changes.
- Don't summarize changes made.
- Don't invent changes other than what's explicitly requested.
- Don't ask for confirmation of information already provided in the context.
- Don't remove unrelated code or functionalities. Pay attention to preserving existing structures.
- Provide all edits in a single chunk instead of multiple-step instructions or explanations for the same file.
- Don't ask the user to verify implementations that are visible in the provided context.
- Don't suggest updates or changes to files when there are no actual modifications needed.
- Always provide links to the real files, not x.md.
- Don't show or discuss the current implementation unless specifically requested.

### Code Style and Structure

- Use functional and declarative programming patterns; avoid classes.
- Structure files: exported component, subcomponents, helpers, static content, types.
- Use early returns whenever possible to make the code more readable.

## Constants Over Magic Numbers

- Replace hard-coded values with named constants
- Use descriptive constant names that explain the value's purpose
- Keep constants at the top of the file or in a dedicated constants file

## Meaningful Names

- Variables, functions, and classes should reveal their purpose
- Names should explain why something exists and how it's used
- Avoid abbreviations unless they're universally understood

## Smart Comments

- Don't comment on what the code does - make the code self-documenting
- Use comments to explain why something is done a certain way
- Document APIs, complex algorithms, and non-obvious side effects

## Single Responsibility

- Each function should do exactly one thing
- Functions should be small and focused
- If a function needs a comment to explain what it does, it should be split

## DRY (Don't Repeat Yourself)

- Extract repeated code into reusable functions
- Share common logic through proper abstraction
- Maintain single sources of truth

## Clean Structure

- Keep related code together
- Organize code in a logical hierarchy
- Use consistent file and folder naming conventions

## Encapsulation

- Hide implementation details
- Expose clear interfaces
- Move nested conditionals into well-named functions

## Code Quality Maintenance

- Refactor continuously
- Fix technical debt early
- Leave code cleaner than you found it
