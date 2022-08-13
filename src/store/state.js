let defaultCity = '上海'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}
// 防止自己关闭缓存模式 {
export default {
    city: defaultCity
}