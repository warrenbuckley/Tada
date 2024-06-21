import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS as a } from "@umbraco-cms/backoffice/recycle-bin";
const e = [
  {
    type: "workspaceAction",
    kind: "default",
    overwrites: "Umb.WorkspaceAction.Document.SaveAndPublish",
    // Alias of thing you wanna overwrite
    alias: "Tada.WorkspaceAction.Document.SaveAndPublish",
    name: "[Tada] Save And Publish Document Workspace Action",
    api: () => import("./tada.save-and-publish.action-CtijsPZL.js"),
    weight: 70,
    meta: {
      look: "primary",
      color: "positive",
      label: "TADA Save & Publish"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: "Umb.Workspace.Document"
        // Cant get UMB_DOCUMENT_WORKSPACE_ALIAS 
      },
      {
        alias: a
      }
    ]
  }
], n = (i, o) => {
  console.log("Hello from Tada"), o.registerMany([
    ...e
  ]);
};
export {
  n as onInit
};
//# sourceMappingURL=tada.js.map
