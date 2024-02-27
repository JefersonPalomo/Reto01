import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getRestaurants(query) {
  await fakeNetwork(`getRestaurants:${query}`);
  let restaurants = await localforage.getItem("restaurants");
  if (!restaurants) restaurants = [];
  if (query) {
    restaurants = matchSorter(restaurants, query, { keys: ["first", "last"] });
  }
  return restaurants.sort(sortBy("last", "createdAt"));
}

export async function createRestaurant() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let restaurant = { id, createdAt: Date.now() };
  let restaurants = await getRestaurants();
  restaurants.unshift(restaurant);
  await set(restaurants);
  return restaurant;
}

export async function getRestaurant(id) {
  await fakeNetwork(`contact:${id}`);
  let restaurants = await localforage.getItem("restaurants");
  let restaurant = restaurants.find(contact => contact.id === id);
  return restaurant ?? null;
}

export async function updateContact(id, updates) {
  await fakeNetwork();
  let restaurants = await localforage.getItem("restaurants");
  let restaurant = restaurants.find(contact => contact.id === id);
  if (!restaurant) throw new Error("No restaurant found for", id);
  Object.assign(restaurant, updates);
  await set(restaurants);
  return restaurant;
}

export async function deleteContact(id) {
  let restaurants = await localforage.getItem("restaurants");
  let index = restaurants.findIndex(restaurant => restaurant.id === id);
  if (index > -1) {
    restaurants.splice(index, 1);
    await set(restaurants);
    return true;
  }
  return false;
}

function set(restaurants) {
  return localforage.setItem("restaurants", restaurants);
}

let fakeCache = {};

async function fakeNetwork(key) {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}