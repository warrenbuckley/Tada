import { UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS } from '@umbraco-cms/backoffice/recycle-bin';

export const manifests: Array<UmbExtensionManifest> = [
	{
		type: 'workspaceAction',
        kind: 'default',
        overwrites: 'Umb.WorkspaceAction.Document.SaveAndPublish', // Alias of thing you wanna overwrite
        alias: 'Tada.WorkspaceAction.Document.SaveAndPublish',
        name: '[Tada] Save And Publish Document Workspace Action',
        api: () => import('./tada.save-and-publish.action.js'),
        weight: 70,
        meta: {
            look: 'primary',
            color: 'positive',
            label: 'Save & Publish'
        },
        conditions: [
            {
                alias: 'Umb.Condition.WorkspaceAlias',
                match: 'Umb.Workspace.Document',  // Cant get UMB_DOCUMENT_WORKSPACE_ALIAS 
            },
            {
                alias: UMB_ENTITY_IS_NOT_TRASHED_CONDITION_ALIAS,
            },
        ]
	},	
];