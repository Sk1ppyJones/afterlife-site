const member_list = [
    {
        header: "https://yt3.googleusercontent.com/EYhpaxjrgwLo5bwWq80LifICs_MYs5rF8Lm4JdVLK8SrpoeDGH5Axzmaw4Hcj1S0zSkdCOHiiw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        pfp: "https://yt3.googleusercontent.com/ytc/AIdro_l51fmGH0eM0YYG0ltkmBUhdNhYaU0rfbifYEYngjw8oFM=s160-c-k-c0x00ffffff-no-rj",
        name: "AlloutJay",
        role: "SupremeLeader",
        bio: "Hey there! I'm AllOutJay, but you can call me Jay. I am a Minecraft Content Creator who primarily makes Minecraft Survival Lets Play content.",
        socials: ["https://www.youtube.com/@AllOutJay", "https://www.x.com/AllOutJay", "https://instagram.com/alloutjay", "https://twitch.tv/alloutjay"]
    },
    {
        header: "https://yt3.googleusercontent.com/_qlNup8NZeegH9qR08pUztAmuQks3tCDEwkR4hpJ2_Hn5mxDF8YJbSbe9clyyRhrKZjigi5l=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        pfp: "https://yt3.googleusercontent.com/JTQb7xKFRPLFXvytzxpbSlk22aDJvaSeD_iwid8_8jz-M6_5vTaHH6FlN04iM6-PRjXW4z9m=s160-c-k-c0x00ffffff-no-rj",
        name: "BlondSkunk",
        role: "Master Architect",
        bio: "Welcome to the Blondskunk YouTube channel! On this channel, I make videos mostly around the topic of building in Minecraft."
    }
]



$(document).ready(function () {
    for (let i = 0; i < member_list.length; i++) {
        // Create The Main Card Content
        var col_div = document.createElement('div');
        $(col_div).addClass("col mb-3");

        var card_div = document.createElement('div');
        $(card_div).addClass("card");

        var head_div = document.createElement('div');
        var head_img = '<img src= "' + member_list[i].header + '" alt="Cover" class="card-img-top">';

        var info_div = document.createElement('div');
        $(info_div).addClass("card-body text-center");
        var info_con = '<img src= ' + member_list[i].pfp + ' style="width:100px;margin-top:-65px" alt="User" class="img-fluid img-thumbnail rounded-circle border-0 mb-3"> <h5 class="card-title"></h5> ' + member_list[i].name + ' </h5> <p class="text-secondary mb-1"> ' + member_list[i].role + ' </p> <p class="text-muted font-size-sm"> ' + member_list[i].bio + ' </p>'

        head_div.innerHTML = head_img;
        info_div.innerHTML = info_con;

        card_div.append(head_div)
        card_div.append(info_div)

        // Create The Footer
        var footer_div = document.createElement('div')
        $(footer_div).addClass("card-footer text-center")
        for (let j = 0; j < member_list[i].socials.length; j++) {
            if (member_list[i].socials[j].includes("youtube")) {
                var social_div = document.createElement('div');
                var current_social = '<a class="bio-youtube p-1" href= ' + member_list[i].socials[j] + ' target="_blank"><svg class="bi" width="24" height="24"> <use xlink:href="#youtube" /> </svg></a>'

                social_div.innerHTML = current_social;
                card_div.append(social_div)
            } else if (member_list[i].socials[i].includes(".x.")) {

            } else if (member_list[i].socials[i].includes("instagram")) {

            } else if (member_list[i].socials[i].includes("twitch")) {

            }
        }

        // Append Elements
        col_div.append(card_div)

        $("#member-cards").append(col_div)
    }
})
