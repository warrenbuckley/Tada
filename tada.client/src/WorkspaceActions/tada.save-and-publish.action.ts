import { UMB_DOCUMENT_WORKSPACE_CONTEXT } from '@umbraco-cms/backoffice/document';
import { UmbWorkspaceActionBase } from '@umbraco-cms/backoffice/workspace';
import { launchConfetti } from '../Confetti';

export default class TadaDocumentSaveAndPublishWorkspaceAction extends UmbWorkspaceActionBase {

    async execute() {
        try {
             // Get the workspace context
            const workspaceContext = await this.getContext(UMB_DOCUMENT_WORKSPACE_CONTEXT);

            // Load in drumroll
            const audio = new Audio('https://hackmakedo.com/audio/drumroll.mp3');

            // Define a flag to ensure the specific code runs only once
            let codeExecuted = false;

            audio.addEventListener('timeupdate', async () => {
                console.log('Current time:', audio.currentTime);

                // Check if the current time is at least 5 seconds and the specific code hasn't run yet
                if (audio.currentTime >= 1.5 && !codeExecuted) {
                     // Save and publish the document
		            await workspaceContext.saveAndPublish();

                    // Confetti time
                    launchConfetti();
    
                    // Ensure the code doesn't run again
                    // As the timeupdate event is fired lots as sfx  plays
                    codeExecuted = true;
                }
            });

            // Play the drumroll
            audio.play();
        }
        catch (error) {
            console.error('Failed to save and publish document', error);
        }
    }
}