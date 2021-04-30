export const value = 'shared value';
import * as $ from 'jquery';

export function html(selector: string, html: string) {
    setTimeout(() => {
        $(selector).html(html);
    }, 3000);
}