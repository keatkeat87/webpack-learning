export const value = 'shared value';
import $ from "jquery";

export function html(selector, html) {
    setTimeout(() => {
        $(selector).html(html);
    }, 3000);
}