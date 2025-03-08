define([
    'knockout',
    'arches',
    'templates/views/components/plugins/init-her-workflow.htm'
], function(ko, arches, InitWorkflowTemplate) {

    var InitWorkflow = function(params) {
        this.workflows = params.workflows.map(function(wf){
            wf.url = arches.urls.plugin(wf.slug);
            return wf;
        }, this);
    };

    return ko.components.register('init-her-workflow', {
        viewModel: InitWorkflow,
        template: InitWorkflowTemplate
    });
});
