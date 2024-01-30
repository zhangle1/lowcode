

// eslint-disable-next-line @typescript-eslint/no-var-requires
const createHistory = require("history").createBrowserHistory;
import type { History } from "history";

const history: History = createHistory();
export default history;



export enum NavigationMethod {
    CommandClick = "CommandClick",
    EntityExplorer = "EntityExplorer",
    Omnibar = "Omnibar",
    Debugger = "Debugger",
    CanvasClick = "CanvasClick",
    ActionBackButton = "ActionBackButton",
    ContextSwitching = "ContextSwitching",
    AppSidebar = "AppSidebar",
    PackageSidebar = "PackageSidebar",
    SegmentControl = "SegmentControl",
    EditorTabs = "EditorTabs",
    WorkflowSidebar = "WorkflowSidebar",
  }
  
  export interface AppsmithLocationState {
    invokedBy?: NavigationMethod;
  }
  
