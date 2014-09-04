// SAMPLE
this.manifest = {
    "name": "Lean Trello",
    "icon": "icon.png",
    "settings": [
        {
            "tab": i18n.get("lead time"),
            "group": i18n.get("columns"),
            "name": "cycleStartColumn",
            "type": "text",
            "label": i18n.get("Cycle Start"),
            "text": i18n.get("Column Name")
        },
        {
            "tab": i18n.get("lead time"),
            "group": i18n.get("columns"),
            "name": "cycleEndColumn",
            "type": "text",
            "label": i18n.get("Cycle End"),
            "text": i18n.get("Column Name")
        },
        {
            "tab": i18n.get("lead time"),
            "group": i18n.get("columns"),
            "name": "myDescription",
            "type": "description",
            "text": i18n.get("lead time columns description")
        },
    ],
    "alignment": [
        [
            "cycleStartColumn",
            "cycleEndColumn"
        ]
    ]
};
