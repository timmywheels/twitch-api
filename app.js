// GET https://api.twitch.tv/kraken/streams/<channel ID>


var streamBox = document.getElementById('streamBox');
var streamers = document.getElementsByClassName('streamers');

var users = ['ninja', 'freecodecamp', 'summit1g'];

for (var i = 0; i < users.length; i++) {

    var url = "https://api.twitch.tv/kraken/streams/" + users[i];

    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.setRequestHeader("Client-ID", "e7vwg9cc1ocxvimfgff2dvzc6fd81d");

    xhr.onload = function() {

        var data = JSON.parse(this.response);

        if (data.stream == null) {
            console.log('user is offline');
            var li = document.createElement('li');
            li.innerHTML = users[i];
            var watch = document.createElement('i');
            var iconDiv = document.createElement('div');
            var icon = document.createElement('i');

            li.classList.add('streamers');
            watch.classList.add('watchLive');
            watch.classList.add('fab');
            watch.classList.add('fa-twitch');
            watch.classList.add('hide');
            iconDiv.classList.add('icon');
            iconDiv.classList.add('offline');
            icon.classList.add('fas');
            icon.classList.add('fa-circle-notch');

            li.appendChild(watch);
            li.appendChild(iconDiv);
            iconDiv.appendChild(icon);
            streamBox.appendChild(li);
        }
        else {
            var li = document.createElement('li');
            li.innerHTML = data.stream.channel.display_name;
            var iconDiv = document.createElement('div');
            var link = document.createElement('a');
            var watch = document.createElement('i');
            var icon = document.createElement('i');

            li.classList.add('streamers');
            link.href = 'https://twitch.tv/' + data.stream.channel.display_name;
            watch.classList.add('watchLive');
            watch.classList.add('fab');
            watch.classList.add('fa-twitch');
            iconDiv.classList.add('icon');
            iconDiv.classList.add('online');
            icon.classList.add('fas');
            icon.classList.add('fa-circle-notch');
            icon.classList.add('fa-spin')

            link.appendChild(watch);
            li.appendChild(link);
            li.appendChild(iconDiv);
            iconDiv.appendChild(icon);
            streamBox.appendChild(li);
            // console.log(data.stream.channel.display_name, 'is online');
            // console.log('Watch live:', data.stream._links.self);
        }
    }

    xhr.send();

}

// {
//     stream: {
//         _id: 28822617760,
//         game: "Fortnite",
//         viewers: 122658,
//         video_height: 1080,
//         average_fps: 62.0078740157,
//         delay: 0,
//         created_at: "2018-05-25T01:10:47Z",
//         is_playlist: false,
//         stream_type: "live",
//         preview: {
//             small: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-80x45.jpg",
//             medium: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-320x180.jpg",
//             large: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-640x360.jpg",
//             template: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ninja-{width}x{height}.jpg"
//         },
//         channel: {
//             mature: false,
//             partner: true,
//             status: "Mega Tryhard Ninja | On My NEW NZXT CASE GAMING PC | Custom Ninja NZXT PC Case Announced! | !giveaway - http://vast.mx/NINJA",
//             broadcaster_language: "en",
//             display_name: "Ninja",
//             game: "Fortnite",
//             language: "en",
//             _id: 19571641,
//             name: "ninja",
//             created_at: "2011-01-16T04:31:20Z",
//             updated_at: "2018-05-25T01:29:41Z",
//             delay: null,
//             logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/6d942669-203f-464d-8623-db376ff971e0-profile_image-300x300.png",
//             banner: null,
//             video_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/ninja-channel_offline_image-bb607ec9e64184fa-1920x1080.png",
//             background: null,
//             profile_banner: "https://static-cdn.jtvnw.net/jtv_user_pictures/ninja-profile_banner-0cc15b380936cdfc-480.png",
//             profile_banner_background_color: "",
//             url: "https://www.twitch.tv/ninja",
//             views: 189524586,
//             followers: 7562908,
//             _links: {
//                 self: "https://api.twitch.tv/kraken/channels/ninja",
//                 follows: "https://api.twitch.tv/kraken/channels/ninja/follows",
//                 commercial: "https://api.twitch.tv/kraken/channels/ninja/commercial",
//                 stream_key: "https://api.twitch.tv/kraken/channels/ninja/stream_key",
//                 chat: "https://api.twitch.tv/kraken/chat/ninja",
//                 features: "https://api.twitch.tv/kraken/channels/ninja/features",
//                 subscriptions: "https://api.twitch.tv/kraken/channels/ninja/subscriptions",
//                 editors: "https://api.twitch.tv/kraken/channels/ninja/editors",
//                 teams: "https://api.twitch.tv/kraken/channels/ninja/teams",
//                 videos: "https://api.twitch.tv/kraken/channels/ninja/videos"
//             }
//         },
//         _links: {
//             self: "https://api.twitch.tv/kraken/streams/ninja"
//         }
//     },
//     _links: {
//         self: "https://api.twitch.tv/kraken/streams/ninja",
//         channel: "https://api.twitch.tv/kraken/channels/ninja"
//     }
// }
