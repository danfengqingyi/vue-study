/**
 * Local Storage
 * Session Storage
 * Cookies
 */
import Cookies from "js-cookie";

export function setItemByLocalStorage(name, value) {
  localStorage.setItem(name, value);
}
export function getItemByLocalStorage(name) {
  return localStorage.getItem(name);
}

export function setItemBySessionStorage(name, value) {
  sessionStorage.setItem(name, value);
}
export function getItemBySessionStorage(name) {
  return sessionStorage.getItem(name);
}

export function setItemByCookies(name, value) {
  Cookies.set(name, value);
}
export function getItemByCookies(name) {
  return Cookies.get(name);
}
