/**
 * Created by IntelliJ IDEA.
 * User: mla
 * Date: 10/24/11
 * Time: 12:48 PM
 * To change this template use File | Settings | File Templates.
 */
/*if(!Editor) {
    var Editor = Common.CtyEditor;
}*/
var ICON_MOVE_UP = 'resources/images/icon_move_up.gif';
var ICON_MOVE_UP_DISABLED = 'resources/images/icon_move_up-disabled.gif';
var ICON_MOVE_DOWN = 'resources/images/icon_move_down.gif';
var ICON_MOVE_DOWN_DISABLED = 'resources/images/icon_move_down-disabled.gif';

Ext.define('App.controller.CtyControlsController', {
    extend: 'Ext.app.Controller',

    stores: [
        'NewCtyMarker'
    ],
    models: [
        'BlockEditModel',
        'NewCty' // This is just a short test
    ],
    views: [
        'PreviewCol',
        'RightCol',
        'TreeLeftCol',
        'BlockEditWindow',
        'InputEditWindow',
        'RadioOptionRow',
        'RelatedContentRow',
        'DropdownOptionRow'
    ],

    init: function () {
        this.control({
            '*[action=addBlock]': {
                click: this.addBlock
            },
            '*[action=addInput]': {
                click: this.addInput
            },
            'blockedit textfield': {
                focus: this.setHelp
            },
            'inputEdit textfield': {
                focus: this.setHelp
            },
            'inputEdit checkbox': {
                focus: this.setHelp
            },
            'inputEdit radiogroup': {
                focus: this.setHelp
            },
            'inputEdit combobox': {
                focus: this.setHelp
            },
            'inputEdit #inputConfig': {
                change: this.toggleButtons
            },
            'inputEdit #inputName': {
                change: this.updateXpath
            },
            'blockedit [action=save]': {
                click: this.saveBlock
            },
            /*'blockedit #blockGroupTextfield': {
                blur: this.checkBlockGroup
            },*/
            'inputEdit [action=save]': {
                click: this.saveInput
            },
            'inputEdit [action=removeDefaultRadio]': {
                click: this.removeDefaultRadio
            },
            'inputEdit [action=moveOption]': {
                click: this.moveOption
            },
            'inputEdit [action=removeOption]': {
                click: this.removeOption
            },
            'inputEdit #addOption': {
                click: this.addOption
            },
            'inputEdit #addRelatedContenttype': {
                click: this.addRelatedContentRow
            },
            'inputEdit [action=removeRelatedContenttype]': {
                click: this.removeRelatedContentRow
            },
            'inputEdit [hasMovers=true]': {
                add: this.disableMovers
            },
            '* [action=loadTestContenttype]': {
                click: this.loadTestContenttypes
            }
        });
    },
    // Temporary test to load different test contenttypes.
    loadTestContenttypes: function(button){
        /*var theStore = Ext.data.StoreManager.lookup('NewCtyMarker');*/
        var theStore = Ext.getStore('NewCtyMarker');
        theStore.setProxy({
            type: 'ajax',
            url: button.urlPath
        });

        this.clearTree(theStore);
        theStore.load();
    },
    // Workaround for bug in 4.0.7
    clearTree: function(treePanel) {
        var delNode;
        while (delNode = treePanel.getRootNode().childNodes[0]) {
            treePanel.getRootNode().removeChild(delNode);
        }
    },

    setHelp: function (field) {
        if(field.helpText) {
            var helpPanel = field.up('window').down('#helpPanel');
            helpPanel.update(field.helpText);
        }
    },

    addBlock: function (button) {
        var blockWindow = Ext.create('App.view.BlockEditWindow', {
            //renderTo: Ext.getBody()
        });
        blockWindow.down('#helpPanel').update(button.helpText);
        blockWindow.show();
    },
    addInput: function (button) {
        var inputWindow = Ext.create('App.view.InputEditWindow', {
            //type: button.type
            //renderTo: Ext.getBody()
        });
        inputWindow.configureInputType(button);
        inputWindow.down('#helpPanel').update(button.helpText);
        inputWindow.show();
    },
    //HTMLArea show the buttons when config is set to custom
    toggleButtons: function (select) {
        var win = select.up('window');
        var buttons = win.down('#inputButtons');
        if(select.value === 'custom') {
            buttons.show();
            buttons.setDisabled(false);
        } else {
            buttons.setValue('');
            buttons.setDisabled(true);
            buttons.hide();
        }
    },
    //When the save button is clicked for edit block form.
    saveBlock: function (button) {
        var form = button.up('window').down('#blockEditFormPanel');
        var blockModel = Ext.create('App.model.BlockEditModel', {
            name: form.down('#blockNameTextfield').getValue(),
            group: form.down('#blockGroupTextfield').getValue()
        });
        var errors = blockModel.validate();
        if(errors.isValid()) {
            //Ext.Msg.alert('Success', 'Valid! But saving the data has not been implemented yet :(.');
            Common.CtyEditor.saveBlock(form);
            button.up('window').close();
        } else {
            this.printErrors(errors, blockModel);
        }
    },
    //When the save button is clicked for an addInput form.
    saveInput: function (button) {
        var formPanel = button.up('window').down('#inputFormPanel');
        //console.log(form);
        var formErrors = [];
        var formFields = formPanel.getForm().getFields().items;

        //console.log(formFields);
        var i = 0;
        for(i = 0; i < formFields.length; i++){
            if(formFields[i].getErrors() != '') {
                formErrors.push(formFields[i].getErrors());
            }

        }
        if(formErrors.length > 0) {
            Ext.Msg.alert('Error', 'The form is not valid');
        }

        //console.log(formErrors);

        if(formPanel.getForm().isValid()){
            Ext.Msg.alert('Notice','Not implemented yet.')
        } else {
            Ext.Msg.alert('Error','Not valid!')
        }


    },


    // Radiobutton controls
    removeDefaultRadio: function (button) {
        var radioOptions = button.up('window').down('#radioContainer').query('.radiofield');
        for(var i = 0; i < radioOptions.length; i++) {
            radioOptions[i].setValue(false);
        }
    },

    //Dropdown and Radiobutton option controls
    moveOption: function (button) {
        var thisRow = button.ownerCt;
        var container = thisRow.ownerCt;
        var idx = container.items.indexOf(thisRow);
        container.move(idx, idx + button.moveDir);
        this.disableMovers(container);
        //var idx = thisRow.ownerCt.items.indexOf(thisRow);
        //thisRow.up('window').down('#dropdownOptionContainer').move(idx, idx + button.moveDir);
        //this.disableMovers(thisRow.ownerCt);
    },
    removeOption: function (button) {
        var container = button.ownerCt.ownerCt;
        button.ownerCt.destroy();
        container.setHeight(container.getHeight() - 27);
        container.doLayout();
        this.disableMovers(container);
    },
    addOption: function (button) {
        //var container = button.up('window').down('#dropdownOptionContainer');
        var container = button.up('window').down(button.optionContainer);
        container.add([
                {
                    xtype: button.optionRow
                }
            ]
        );
        container.setHeight(container.getHeight() + 27);
        container.doLayout();
    },
    //Keeps the buttons for moving options up and down disabled for the top row (up) and bottom row (down).
    disableMovers: function (container) {
        //var rows = container.query('.dropdownOptionRow');
        var rows = container.query(container.optionRowXtype);
        for(var i = 0; i < rows.length; i++) {
            rows[i].down('button[moveDir=-1]').setDisabled(false);
            rows[i].down('button[moveDir=-1]').setIcon(ICON_MOVE_UP);
            rows[i].down('button[moveDir=1]').setDisabled(false);
            rows[i].down('button[moveDir=1]').setIcon(ICON_MOVE_DOWN);
        }
        rows[0].down('button[moveDir=-1]').setDisabled(true);
        rows[0].down('button[moveDir=-1]').setIcon(ICON_MOVE_UP_DISABLED);
        rows[rows.length -1].down('button[moveDir=1]').setDisabled(true);
        rows[rows.length -1].down('button[moveDir=1]').setIcon(ICON_MOVE_DOWN_DISABLED);
    },
    
    //Related contenttype controls
    addRelatedContentRow: function (button) {
        var container = button.up('window').down('#contenttypeRowContainer');
        container.add([{xtype: 'relatedContentRow'}]);
        container.setHeight(container.getHeight() + 27);
        container.doLayout();
    },
    removeRelatedContentRow: function (button) {
        var container = button.up('window').down('#contenttypeRowContainer');
        button.ownerCt.destroy();
        container.setHeight(container.getHeight() - 27);
        container.doLayout();
    },

    // Miscellaneous stuff
    printErrors: function (errors, inputModel) {
        var i = 0;
        var msg = '';

        for(i = 0; i < inputModel.fields.length; i++) {
            var modelField = inputModel.fields.items[i];
            var fieldErrors = errors.getByField(modelField.name);
            var j = 0;
            while(fieldErrors[j] !== undefined && fieldErrors !== null) {
                msg += 'The field "' + fieldErrors[j].field + '" ' + fieldErrors[j].message + '.<br />';
                j++;
            }
        }
        Ext.Msg.alert('Error','Error! ' + msg);
    },

    hasWhitespace: function (s) {
        return /\s/g.test(s);
    },

    checkBlockGroup: function (field) {
        var val = field.getValue();
        if(this.hasWhitespace(val)) {
            field.markInvalid('Cannot have a space between characters.')
        }
    },

    // Make the xpath match the input on each form
    updateXpath: function (input) {
        //Set the default XPATH.
        //TODO: Must account for when the input is in a block group.
        input.up('window').down('#inputXpath').setValue('contentdata/' + input.getValue());
    }

});