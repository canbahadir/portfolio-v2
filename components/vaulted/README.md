# Vaulted Components

This directory contains components that are not currently in use but are preserved for potential future activation.

## Available Components

### WorkspaceSection
**Status**: Vaulted  
**Location**: `workspace-section.tsx`

A section that organizes content into categorized workspaces (Projects, Blog, Certificates). Inspired by Zen Browser's workspace feature.

**To Restore:**
1. Uncomment the import in `app/page.tsx`:
   ```typescript
   import { WorkspaceSection } from "@/components/vaulted/workspace-section"
   ```

2. Uncomment the component in the page:
   ```tsx
   <WorkspaceSection />
   ```

3. (Optional) Move back to main components directory:
   ```bash
   mv components/vaulted/workspace-section.tsx components/
   ```

**Data Source**: `lib/constants.ts` - `workspaces` array

