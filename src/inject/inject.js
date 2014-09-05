chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            var cycleStartColumn = "Implementation",
                cycleEndColumn = "Done This Week",
                columnHeaderSelector = ".list-header-name",
                cardUrlClass = 'a.js-card-name',
                boardID = '51ae6034ae1428a31800409c',
                cardID = '5408b0f85e10caee9be0b9d8';

            console.log("Hello. This message was sent from scripts/inject.js");

            boardUrl = 'https://trell.com/1/boards/' + boardID + '/cards/' + cardID;
            var cardData = $.getJSON(
                boardUrl,
                function(data) {
                    console.log(data);
                }
            );
        }
	}, 10);
});
