import { UMB_DOCUMENT_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/document';
import { UmbWorkspaceActionBase } from '@umbraco-cms/backoffice/workspace';
import { launchConfetti } from '../Confetti';

export default class TadaDocumentSaveAndPublishWorkspaceAction extends UmbWorkspaceActionBase {

    async execute() {
        try {
             // Get the workspace context
            const workspaceContext = await this.getContext(UMB_DOCUMENT_WORKSPACE_CONTEXT);

            // Save and publish the document
		    await workspaceContext.saveAndPublish();

            // Play a sound
            const audio = new Audio('https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-adam-a-johnson/aaj_0164_SmllCrwdClppng2.mp3');
            audio.play();

            // Confetti time
            launchConfetti();

        }
        catch (error) {
            console.error('Failed to save and publish document', error);
        }
    }
}