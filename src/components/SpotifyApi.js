const axios = require("axios");
const fetch = require("node-fetch");
const fs = require("fs");
const { default: Post } = require("./Post");
const { count } = require("console");

const artists = {
  KDA: "4gOc8TsQed9eqnqJct2c5v",
  NF: "6fOMl44jA4Sp5b9PpYCkzz",
  yokeLore: "7FU0xCgmSYQEiBeevUqQ4S",
};

clientId = "155d87e0ee2d4b9bbeb1fb6a7dd5a2dc";
clientSecret = "7a4c2d458cd746208208351530df4436";

_getToken = () => {
  return fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return data.access_token;
    });
};

let getArtistAlbum = (ID) => {
  _getToken().then((token) => {
    const options = {
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`https://api.spotify.com/v1/artists/${ID}/albums`, options)
      .then((res) => {
        const dest = fs.createWriteStream("./src/Data.txt");
        res.body.pipe(dest);
        return res.json();
      })
      .then((json) => {
        let albums = new Set();

        json.items.forEach((album) => {
          albums.add(album.name);
        });
        console.log(albums);
      })
      .catch((err) => {
        // console.warn("You messed up");
        console.warn(err);
      });
  });
};

// getArtistAlbum(yokeLore);
getArtistAlbum(artists.KDA);
