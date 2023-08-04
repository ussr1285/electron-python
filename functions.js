const common_info = ["appName", "appSite", "siteDomain", "appId", "appVersion", "onesignalPushId"]
const android_info = ["appVersionCode", "androidKeystorePath", "androidKeystorePassword", "androidAlias", "androidAliasPassword"]

const getAppInfo = () => {
    let info = {}
    let os_radio = document.getElementsByName('os_type');
    let os_type

    for(var i=0; i < os_radio.length; i++) {
        if(os_radio[i].checked === true) {
            os_type = os_radio[i].value;
      }
    }
    
    common_info.forEach(inputInfo => {
        info = {...info, [inputInfo]:document.getElementById(inputInfo).value}
    });
    if(os_type == "android"){
        android_info.forEach(inputInfo => {
            info = {...info, [inputInfo]:document.getElementById(inputInfo).value}
        });
    }
    info = {...info, ["os_type"]:os_type}
    alert(JSON.stringify(info))
}

document.getElementById('btnEd').addEventListener('click', () => {
    // Open a local file in the default app
    // alert("hello")
    getAppInfo()
})


// let os = document.getElementById("os").value
/*
let infoTag = []
let info = []

(os === "android") ? infoTag = [...common_info, ...android_info] : infoTag = common_info;

info.map((infoTagId) => {
    info.push(document.getElementById(infoTagId).value)
})

alert(info)
*/
    // alert("haha")

/*
const handleOnChange = ({ target: { value } }) => {
    window.API.setName(value)
}
const nameSource = document.getElementById('name');
nameSource.addEventListener('change', handleOnChange)
*/
