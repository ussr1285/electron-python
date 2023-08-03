// const os = 
const common_info = ["appName", "appSite", "siteDomain", "appId", "appVersion", "onesignalPushId"]
const android_info = ["appVersionCode", "androidKeystorePath", "androidKeystorePassword", "androidAlias", "androidAliasPassword"]

const getAppInfo = () => {
    let info = {}
    common_info.forEach(inputInfo => {
        info = {...info, [inputInfo]:document.getElementById(inputInfo).value}
        // info.push(document.getElementById(inputInfo).value)
    });
    android_info.forEach(inputInfo => {
        info = {...info, [inputInfo]:document.getElementById(inputInfo).value}
        // info.push(document.getElementById(inputInfo).value)
    });

    alert(JSON.stringify(info))
}


document.getElementById('btnEd').addEventListener('click', () => {
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
