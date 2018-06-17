// Twitch Box App

var twitchBox = {

    users: ['ninja', 'summit1g', 'OverwatchLeague', 'freecodecamp', 'BlodgetTV'],
    // users: ['OverwatchLeague', 'TotalBiscuit', 'TSM_Myth', 'freecodecamp'],

    streamBox: document.getElementById('streamBox'),
    streamers: document.getElementsByClassName('streamers'),
    addUserInput: document.getElementById('addUserInput'),
    addUserBtn: document.getElementById('addUserBtn'),
    toolTips: document.getElementsByClassName('tooltip'),
    watchLive: document.getElementsByClassName('watchLive'),

    startApp: function() {

        for (var i in twitchBox.users) {

            var url = "https://api.twitch.tv/kraken/streams/" + twitchBox.users[i];

            var xhr = new XMLHttpRequest();

            // Setting async to true here will show all offline users
            // as the last user of the 'users' array
            xhr.open('GET', url, false);

            xhr.setRequestHeader("Client-ID", "e7vwg9cc1ocxvimfgff2dvzc6fd81d");

            xhr.onload = function() {

                var userName = twitchBox.users;

                console.log(twitchBox.users[i]);

                var data = JSON.parse(this.response);

                if (data.stream === null) {

                    var offLi = document.createElement('li');
                    var offWatch = document.createElement('i');
                    var offIconDiv = document.createElement('div');
                    var offIcon = document.createElement('i');

                    offLi.classList.add('streamers');
                    offWatch.classList.add('watchLive');
                    offWatch.classList.add('fab');
                    offWatch.classList.add('fa-twitch');
                    offWatch.classList.add('hide');

                    offIconDiv.classList.add('icon');
                    offIconDiv.classList.add('offline');

                    offIcon.classList.add('fas');
                    offIcon.classList.add('fa-circle-notch');

                    offLi.innerHTML = userName[i];
                    offLi.appendChild(offWatch);
                    offLi.appendChild(offIconDiv);
                    offIconDiv.appendChild(offIcon);
                    twitchBox.streamBox.appendChild(offLi);

                }

                else {

                    var li = document.createElement('li');
                    var iconDiv = document.createElement('div');
                    var link = document.createElement('a');
                    var profile = document.createElement('a');
                    var watch = document.createElement('i');
                    var toolTip = document.createElement('div');
                    var icon = document.createElement('i');

                    li.classList.add('streamers');
                    li.innerHTML = data.stream.channel.display_name;
                    link.href = 'https://twitch.tv/' + data.stream.channel.display_name;
                    profile.href =
                        link.setAttribute('target', '_blank');

                    watch.classList.add('watchLive');
                    watch.classList.add('fab');
                    watch.classList.add('fa-twitch');
                    toolTip.style.display = 'none';


                    toolTip.classList.add('tooltip');
                    toolTip.innerHTML = data.stream.channel.status;

                    iconDiv.classList.add('icon');
                    iconDiv.classList.add('online');

                    icon.classList.add('fas');
                    icon.classList.add('fa-circle-notch');
                    icon.classList.add('fa-spin');

                    link.appendChild(watch);
                    li.appendChild(link);
                    li.appendChild(toolTip);
                    li.appendChild(iconDiv);
                    iconDiv.appendChild(icon);
                    twitchBox.streamBox.appendChild(li);

                }
            };

            xhr.send();

        }

    },

    showToolTip: function() {

        twitchBox.streamBox.addEventListener('mouseover', function(e) {

            var toolTipsArr = Array.from(twitchBox.toolTips);

            for (var i = 0; i < toolTipsArr.length; i++) {

                if (e.target.classList.contains('watchLive')) {
                    e.target.parentNode.nextSibling.classList.add('show'); //traverse to the tooltip div from the watchList class

                }
                else {

                    twitchBox.toolTips[i].classList.remove('show');

                }

            }
        })
    },
};

twitchBox.startApp();
twitchBox.showToolTip();
