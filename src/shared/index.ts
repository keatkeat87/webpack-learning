import * as $ from 'jquery';
export const value = 'shared value';

export function html(selector: string, html: string) {
    setTimeout(() => {
        $(selector).html(html);
    }, 3000);
}
