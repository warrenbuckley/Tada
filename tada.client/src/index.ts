import { UmbEntryPointOnInit } from '@umbraco-cms/backoffice/extension-api';
import { manifests as workspaceActionManifests } from './WorkspaceActions/manifests';

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

    console.log('Hello from Tada');

    // We can register many manifests at once via code 
    // as opposed to a long umbraco-package.json file
    _extensionRegistry.registerMany([
        ...workspaceActionManifests,
    ]);
};
