import { ajax } from "rxjs/observable/dom/ajax";

const baseHeaders = () => ({
    "Content-Type": "application/json",
});

export const get = (url, headers) =>
    ajax.get(url, Object.assign({}, baseHeaders(), headers));
export const post = (url, body, headers) =>
    ajax.post(url, body, Object.assign({}, baseHeaders(), headers));

export const put = (url, body, headers) =>
    ajax.put(url, body, Object.assign({}, baseHeaders(), headers));

export const patch = (url, body, headers) =>
    ajax.patch(url, body, Object.assign({}, baseHeaders(), headers));

export const remove = (url, headers) =>
    ajax.delete(url, Object.assign({}, baseHeaders(), headers));
