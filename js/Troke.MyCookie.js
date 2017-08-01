/**
 * Created by Administrator on 2017/4/26 0026.
 */
/**
 * @method  This is a function of setting cookie
 * @param {string}key
 * @param {string}value
 * @param {number}num
 * @param {string}secure
 * @return null;
 */
function setMyCookie(key,value,num,secure) {
    var tmpstr="";
    if(key)
    {
        tmpstr=encodeURIComponent(key)+"="+encodeURIComponent(value)+";"
    }
    if(num)
    {

        var date=new Date();
        date.setDate(date.getDate()+parseInt(num));
        tmpstr+="expires="+date+";"
    }
    if(secure)
    {
        tmpstr+="secure;"
    }
    document.cookie=tmpstr;
    console.log(tmpstr);
}

/**
 * @method this is a function of getting cookie
 * @returns {{}}
 */

function getMyCookie() {
    var tmpstr=decodeURIComponent(document.cookie.replace(/ /g,""));
    var obj={};
    if(tmpstr.indexOf(";")!=-1)
    {
        var arr=tmpstr.split(";")
        for(var i=0;i<arr.length;i++)
        {
            var arr1=arr[i].split("=")
            obj[arr1[0].trim()]=arr1[1];
        }
    }
    else
    {
        var arr2=tmpstr.split("=")
        obj[arr2[0].trim()]=arr2[1]
    }
    return obj;
}

/**
 * @method this is a function of getting cookie by value of key
 * @param{string} key
 * @returns {*}
 */
function getCookie(key)
{
    var obj=getMyCookie();
    return obj[key]
}