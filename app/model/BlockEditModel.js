Ext.define('CtyEditor.model.BlockEditModel', {
    extend: 'Ext.data.Model',

    fields: [
        'name', 'group'
    ],
    formatMessage: 'The group value cannot contain a space.',
    presenceMessage: 'The block name must not be blank.',
    validations: [
        {type: 'format',    field: 'group', matcher: /^[^\s]*$/ },
        {type: 'presence', field: 'name'}
    ]

    //idProperty: 'key'
});