import React, { useState, useEffect } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";

const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

const artistObj = {
  "external_urls": {
    "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
  },
  "followers": {
    "href": null,
    "total": 22732779
  },
  "genres": ["electro house"],
  "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
  "id": "7vk5e3vY1uw9plTHJAMwjN",
  "images": [{
    "height": 640,
    "url": "https://i.scdn.co/image/86213c012b11a646e3c8c67c7aa093cccf7e6b48",
    "width": 640
  }, {
    "height": 320,
    "url": "https://i.scdn.co/image/71ab34f044b49e006d70df90fdd636032e732469",
    "width": 320
  }, {
    "height": 160,
    "url": "https://i.scdn.co/image/5b253facb0bca7172baec8c0d17a4eedb9799d75",
    "width": 160
  }],
  "name": "Alan Walker",
  "popularity": 85,
  "type": "artist",
  "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
}
const trackObj = [{
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"
      },
      "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
      "id": "4npEfmQ6YuiwW1GpUmaq3F",
      "name": "Ava Max",
      "type": "artist",
      "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/700MviIgFKNTldTXmOAFOr"
    },
    "href": "https://api.spotify.com/v1/albums/700MviIgFKNTldTXmOAFOr",
    "id": "700MviIgFKNTldTXmOAFOr",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02153261ff7373a171c24ab9f9",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851153261ff7373a171c24ab9f9",
      "width": 64
    }],
    "name": "Alone, Pt. II",
    "release_date": "2019-12-27",
    "release_date_precision": "day",
    "total_tracks": 1,
    "type": "album",
    "uri": "spotify:album:700MviIgFKNTldTXmOAFOr"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/4npEfmQ6YuiwW1GpUmaq3F"
    },
    "href": "https://api.spotify.com/v1/artists/4npEfmQ6YuiwW1GpUmaq3F",
    "id": "4npEfmQ6YuiwW1GpUmaq3F",
    "name": "Ava Max",
    "type": "artist",
    "uri": "spotify:artist:4npEfmQ6YuiwW1GpUmaq3F"
  }],
  "disc_number": 1,
  "duration_ms": 179052,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841907010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/0bMbDctzMmTyK2j74j3nF3"
  },
  "href": "https://api.spotify.com/v1/tracks/0bMbDctzMmTyK2j74j3nF3",
  "id": "0bMbDctzMmTyK2j74j3nF3",
  "is_local": false,
  "is_playable": true,
  "name": "Alone, Pt. II",
  "popularity": 82,
  "preview_url": "https://p.scdn.co/mp3-preview/d987c40751aa0ea8530d7e3f3646efbc83057765?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:0bMbDctzMmTyK2j74j3nF3"
}, {
  "album": {
    "album_type": "album",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/3nzuGtN3nXARvvecier4K0"
    },
    "href": "https://api.spotify.com/v1/albums/3nzuGtN3nXARvvecier4K0",
    "id": "3nzuGtN3nXARvvecier4K0",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851a108e07c661f9fc54de9c43a",
      "width": 64
    }],
    "name": "Different World",
    "release_date": "2018-12-14",
    "release_date_precision": "day",
    "total_tracks": 15,
    "type": "album",
    "uri": "spotify:album:3nzuGtN3nXARvvecier4K0"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }],
  "disc_number": 1,
  "duration_ms": 212106,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841549010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/698ItKASDavgwZ3WjaWjtz"
  },
  "href": "https://api.spotify.com/v1/tracks/698ItKASDavgwZ3WjaWjtz",
  "id": "698ItKASDavgwZ3WjaWjtz",
  "is_local": false,
  "is_playable": true,
  "name": "Faded",
  "popularity": 79,
  "preview_url": "https://p.scdn.co/mp3-preview/452d0f90e368128ef75f937c07d2011df7457221?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 15,
  "type": "track",
  "uri": "spotify:track:698ItKASDavgwZ3WjaWjtz"
}, {
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B"
      },
      "href": "https://api.spotify.com/v1/artists/74KM79TiuVKeVCqs8QtB0B",
      "id": "74KM79TiuVKeVCqs8QtB0B",
      "name": "Sabrina Carpenter",
      "type": "artist",
      "uri": "spotify:artist:74KM79TiuVKeVCqs8QtB0B"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
      },
      "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
      "id": "329e4yvIujISKGKz1BZZbO",
      "name": "Farruko",
      "type": "artist",
      "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/1bcvtuHyO79DNAOOhHEkEm"
    },
    "href": "https://api.spotify.com/v1/albums/1bcvtuHyO79DNAOOhHEkEm",
    "id": "1bcvtuHyO79DNAOOhHEkEm",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02d2aaf635815c265aa1ecdecc",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851d2aaf635815c265aa1ecdecc",
      "width": 64
    }],
    "name": "On My Way",
    "release_date": "2019-03-21",
    "release_date_precision": "day",
    "total_tracks": 1,
    "type": "album",
    "uri": "spotify:album:1bcvtuHyO79DNAOOhHEkEm"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/74KM79TiuVKeVCqs8QtB0B"
    },
    "href": "https://api.spotify.com/v1/artists/74KM79TiuVKeVCqs8QtB0B",
    "id": "74KM79TiuVKeVCqs8QtB0B",
    "name": "Sabrina Carpenter",
    "type": "artist",
    "uri": "spotify:artist:74KM79TiuVKeVCqs8QtB0B"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/329e4yvIujISKGKz1BZZbO"
    },
    "href": "https://api.spotify.com/v1/artists/329e4yvIujISKGKz1BZZbO",
    "id": "329e4yvIujISKGKz1BZZbO",
    "name": "Farruko",
    "type": "artist",
    "uri": "spotify:artist:329e4yvIujISKGKz1BZZbO"
  }],
  "disc_number": 1,
  "duration_ms": 193797,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841901010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/4n7jnSxVLd8QioibtTDBDq"
  },
  "href": "https://api.spotify.com/v1/tracks/4n7jnSxVLd8QioibtTDBDq",
  "id": "4n7jnSxVLd8QioibtTDBDq",
  "is_local": false,
  "is_playable": true,
  "name": "On My Way",
  "popularity": 78,
  "preview_url": "https://p.scdn.co/mp3-preview/a2b7d391b7082492253beea21178df5557a4f9bf?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:4n7jnSxVLd8QioibtTDBDq"
}, {
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6pWcSL9wSJZQ9ne0TnhdWr"
      },
      "href": "https://api.spotify.com/v1/artists/6pWcSL9wSJZQ9ne0TnhdWr",
      "id": "6pWcSL9wSJZQ9ne0TnhdWr",
      "name": "K-391",
      "type": "artist",
      "uri": "spotify:artist:6pWcSL9wSJZQ9ne0TnhdWr"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0kXCdaJ7C5MD27jXxzvHsa"
      },
      "href": "https://api.spotify.com/v1/artists/0kXCdaJ7C5MD27jXxzvHsa",
      "id": "0kXCdaJ7C5MD27jXxzvHsa",
      "name": "Ahrix",
      "type": "artist",
      "uri": "spotify:artist:0kXCdaJ7C5MD27jXxzvHsa"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/03tk4zBML1lvnm5xrjnJFl"
    },
    "href": "https://api.spotify.com/v1/albums/03tk4zBML1lvnm5xrjnJFl",
    "id": "03tk4zBML1lvnm5xrjnJFl",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b27349b9fbf2345c02ca2387a357",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e0249b9fbf2345c02ca2387a357",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d0000485149b9fbf2345c02ca2387a357",
      "width": 64
    }],
    "name": "End of Time",
    "release_date": "2020-03-06",
    "release_date_precision": "day",
    "total_tracks": 1,
    "type": "album",
    "uri": "spotify:album:03tk4zBML1lvnm5xrjnJFl"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/6pWcSL9wSJZQ9ne0TnhdWr"
    },
    "href": "https://api.spotify.com/v1/artists/6pWcSL9wSJZQ9ne0TnhdWr",
    "id": "6pWcSL9wSJZQ9ne0TnhdWr",
    "name": "K-391",
    "type": "artist",
    "uri": "spotify:artist:6pWcSL9wSJZQ9ne0TnhdWr"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/0kXCdaJ7C5MD27jXxzvHsa"
    },
    "href": "https://api.spotify.com/v1/artists/0kXCdaJ7C5MD27jXxzvHsa",
    "id": "0kXCdaJ7C5MD27jXxzvHsa",
    "name": "Ahrix",
    "type": "artist",
    "uri": "spotify:artist:0kXCdaJ7C5MD27jXxzvHsa"
  }],
  "disc_number": 1,
  "duration_ms": 187560,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG842001010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/67O8CWXxPsfz8orZVGMQwf"
  },
  "href": "https://api.spotify.com/v1/tracks/67O8CWXxPsfz8orZVGMQwf",
  "id": "67O8CWXxPsfz8orZVGMQwf",
  "is_local": false,
  "is_playable": true,
  "name": "End of Time",
  "popularity": 76,
  "preview_url": "https://p.scdn.co/mp3-preview/37dfc40a4835f04b17772d4119ac9a484a3d163f?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:67O8CWXxPsfz8orZVGMQwf"
}, {
  "album": {
    "album_type": "album",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/3nzuGtN3nXARvvecier4K0"
    },
    "href": "https://api.spotify.com/v1/albums/3nzuGtN3nXARvvecier4K0",
    "id": "3nzuGtN3nXARvvecier4K0",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851a108e07c661f9fc54de9c43a",
      "width": 64
    }],
    "name": "Different World",
    "release_date": "2018-12-14",
    "release_date_precision": "day",
    "total_tracks": 15,
    "type": "album",
    "uri": "spotify:album:3nzuGtN3nXARvvecier4K0"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/6pWcSL9wSJZQ9ne0TnhdWr"
    },
    "href": "https://api.spotify.com/v1/artists/6pWcSL9wSJZQ9ne0TnhdWr",
    "id": "6pWcSL9wSJZQ9ne0TnhdWr",
    "name": "K-391",
    "type": "artist",
    "uri": "spotify:artist:6pWcSL9wSJZQ9ne0TnhdWr"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/61pvU6ZLOF3bl0IOtbmME7"
    },
    "href": "https://api.spotify.com/v1/artists/61pvU6ZLOF3bl0IOtbmME7",
    "id": "61pvU6ZLOF3bl0IOtbmME7",
    "name": "Emelie Hollow",
    "type": "artist",
    "uri": "spotify:artist:61pvU6ZLOF3bl0IOtbmME7"
  }],
  "disc_number": 1,
  "duration_ms": 195840,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841813040"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/0lks2Kt9veMOFEAPN0fsqN"
  },
  "href": "https://api.spotify.com/v1/tracks/0lks2Kt9veMOFEAPN0fsqN",
  "id": "0lks2Kt9veMOFEAPN0fsqN",
  "is_local": false,
  "is_playable": true,
  "name": "Lily",
  "popularity": 76,
  "preview_url": "https://p.scdn.co/mp3-preview/3f0181775972ccc56d9df1da453f4e20e36ed099?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 4,
  "type": "track",
  "uri": "spotify:track:0lks2Kt9veMOFEAPN0fsqN"
}, {
  "album": {
    "album_type": "album",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/3nzuGtN3nXARvvecier4K0"
    },
    "href": "https://api.spotify.com/v1/albums/3nzuGtN3nXARvvecier4K0",
    "id": "3nzuGtN3nXARvvecier4K0",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851a108e07c661f9fc54de9c43a",
      "width": 64
    }],
    "name": "Different World",
    "release_date": "2018-12-14",
    "release_date_precision": "day",
    "total_tracks": 15,
    "type": "album",
    "uri": "spotify:album:3nzuGtN3nXARvvecier4K0"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/1eMmoIprPDWeFdB1FxU6ZV"
    },
    "href": "https://api.spotify.com/v1/artists/1eMmoIprPDWeFdB1FxU6ZV",
    "id": "1eMmoIprPDWeFdB1FxU6ZV",
    "name": "Au/Ra",
    "type": "artist",
    "uri": "spotify:artist:1eMmoIprPDWeFdB1FxU6ZV"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/6064pL9Hu3Wx2bwJMeOx6o"
    },
    "href": "https://api.spotify.com/v1/artists/6064pL9Hu3Wx2bwJMeOx6o",
    "id": "6064pL9Hu3Wx2bwJMeOx6o",
    "name": "Tomine Harket",
    "type": "artist",
    "uri": "spotify:artist:6064pL9Hu3Wx2bwJMeOx6o"
  }],
  "disc_number": 1,
  "duration_ms": 211680,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841806010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/6SRWhUJcD2YKahCwHavz3X"
  },
  "href": "https://api.spotify.com/v1/tracks/6SRWhUJcD2YKahCwHavz3X",
  "id": "6SRWhUJcD2YKahCwHavz3X",
  "is_local": false,
  "is_playable": true,
  "name": "Darkside",
  "popularity": 75,
  "preview_url": "https://p.scdn.co/mp3-preview/2acc534ac733f8868c98e13e4f71917fae2e3ce3?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 11,
  "type": "track",
  "uri": "spotify:track:6SRWhUJcD2YKahCwHavz3X"
}, {
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/6pWcSL9wSJZQ9ne0TnhdWr"
      },
      "href": "https://api.spotify.com/v1/artists/6pWcSL9wSJZQ9ne0TnhdWr",
      "id": "6pWcSL9wSJZQ9ne0TnhdWr",
      "name": "K-391",
      "type": "artist",
      "uri": "spotify:artist:6pWcSL9wSJZQ9ne0TnhdWr"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/49CE2ffZ6Z3zeYSDauSKck"
      },
      "href": "https://api.spotify.com/v1/artists/49CE2ffZ6Z3zeYSDauSKck",
      "id": "49CE2ffZ6Z3zeYSDauSKck",
      "name": "Tungevaag",
      "type": "artist",
      "uri": "spotify:artist:49CE2ffZ6Z3zeYSDauSKck"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/4uIhRJj1Au4TiyHhCOZys5"
    },
    "href": "https://api.spotify.com/v1/albums/4uIhRJj1Au4TiyHhCOZys5",
    "id": "4uIhRJj1Au4TiyHhCOZys5",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273d0d90d516468655298b85062",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02d0d90d516468655298b85062",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851d0d90d516468655298b85062",
      "width": 64
    }],
    "name": "Play",
    "release_date": "2019-08-30",
    "release_date_precision": "day",
    "total_tracks": 1,
    "type": "album",
    "uri": "spotify:album:4uIhRJj1Au4TiyHhCOZys5"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/6pWcSL9wSJZQ9ne0TnhdWr"
    },
    "href": "https://api.spotify.com/v1/artists/6pWcSL9wSJZQ9ne0TnhdWr",
    "id": "6pWcSL9wSJZQ9ne0TnhdWr",
    "name": "K-391",
    "type": "artist",
    "uri": "spotify:artist:6pWcSL9wSJZQ9ne0TnhdWr"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/49CE2ffZ6Z3zeYSDauSKck"
    },
    "href": "https://api.spotify.com/v1/artists/49CE2ffZ6Z3zeYSDauSKck",
    "id": "49CE2ffZ6Z3zeYSDauSKck",
    "name": "Tungevaag",
    "type": "artist",
    "uri": "spotify:artist:49CE2ffZ6Z3zeYSDauSKck"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/6ObeGN1qTsep95QRNOfNc3"
    },
    "href": "https://api.spotify.com/v1/artists/6ObeGN1qTsep95QRNOfNc3",
    "id": "6ObeGN1qTsep95QRNOfNc3",
    "name": "Mangoo",
    "type": "artist",
    "uri": "spotify:artist:6ObeGN1qTsep95QRNOfNc3"
  }],
  "disc_number": 1,
  "duration_ms": 167976,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841904010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/4jp4Z02kzzg8gK0NmDGgml"
  },
  "href": "https://api.spotify.com/v1/tracks/4jp4Z02kzzg8gK0NmDGgml",
  "id": "4jp4Z02kzzg8gK0NmDGgml",
  "is_local": false,
  "is_playable": true,
  "name": "Play",
  "popularity": 74,
  "preview_url": "https://p.scdn.co/mp3-preview/f2e740b36cdf5d80efa0be78d72b028200146d49?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:4jp4Z02kzzg8gK0NmDGgml"
}, {
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/1IKRstg3XuCuLWeCg3oaAW"
    },
    "href": "https://api.spotify.com/v1/albums/1IKRstg3XuCuLWeCg3oaAW",
    "id": "1IKRstg3XuCuLWeCg3oaAW",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273a6a151ed88a170ae3a81eff5",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02a6a151ed88a170ae3a81eff5",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851a6a151ed88a170ae3a81eff5",
      "width": 64
    }],
    "name": "The Spectre",
    "release_date": "2017-09-15",
    "release_date_precision": "day",
    "total_tracks": 1,
    "type": "album",
    "uri": "spotify:album:1IKRstg3XuCuLWeCg3oaAW"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }],
  "disc_number": 1,
  "duration_ms": 193787,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841713010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/2DGa7iaidT5s0qnINlwMjJ"
  },
  "href": "https://api.spotify.com/v1/tracks/2DGa7iaidT5s0qnINlwMjJ",
  "id": "2DGa7iaidT5s0qnINlwMjJ",
  "is_local": false,
  "is_playable": true,
  "name": "The Spectre",
  "popularity": 74,
  "preview_url": "https://p.scdn.co/mp3-preview/0da077aef7e2972ee5374fe65d4cb39af3b3dfb8?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:2DGa7iaidT5s0qnINlwMjJ"
}, {
  "album": {
    "album_type": "album",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/3nzuGtN3nXARvvecier4K0"
    },
    "href": "https://api.spotify.com/v1/albums/3nzuGtN3nXARvvecier4K0",
    "id": "3nzuGtN3nXARvvecier4K0",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e02a108e07c661f9fc54de9c43a",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d00004851a108e07c661f9fc54de9c43a",
      "width": 64
    }],
    "name": "Different World",
    "release_date": "2018-12-14",
    "release_date_precision": "day",
    "total_tracks": 15,
    "type": "album",
    "uri": "spotify:album:3nzuGtN3nXARvvecier4K0"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }],
  "disc_number": 1,
  "duration_ms": 160426,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG841617010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/3LlmKSHR3Rs0Y3KHQLAYDk"
  },
  "href": "https://api.spotify.com/v1/tracks/3LlmKSHR3Rs0Y3KHQLAYDk",
  "id": "3LlmKSHR3Rs0Y3KHQLAYDk",
  "is_local": false,
  "is_playable": true,
  "name": "Alone",
  "popularity": 73,
  "preview_url": "https://p.scdn.co/mp3-preview/7919623d0a448486305fe5a7f8a1459e9a72f535?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 12,
  "type": "track",
  "uri": "spotify:track:3LlmKSHR3Rs0Y3KHQLAYDk"
}, {
  "album": {
    "album_type": "single",
    "artists": [{
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
      },
      "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
      "id": "7vk5e3vY1uw9plTHJAMwjN",
      "name": "Alan Walker",
      "type": "artist",
      "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
    }, {
      "external_urls": {
        "spotify": "https://open.spotify.com/artist/0x3PXj1WnuW7YsBxQK57xM"
      },
      "href": "https://api.spotify.com/v1/artists/0x3PXj1WnuW7YsBxQK57xM",
      "id": "0x3PXj1WnuW7YsBxQK57xM",
      "name": "Ruben",
      "type": "artist",
      "uri": "spotify:artist:0x3PXj1WnuW7YsBxQK57xM"
    }],
    "external_urls": {
      "spotify": "https://open.spotify.com/album/3vZaa7OReXh9JIwfq1nWcD"
    },
    "href": "https://api.spotify.com/v1/albums/3vZaa7OReXh9JIwfq1nWcD",
    "id": "3vZaa7OReXh9JIwfq1nWcD",
    "images": [{
      "height": 640,
      "url": "https://i.scdn.co/image/ab67616d0000b2735eab23d2260268d2fab870d0",
      "width": 640
    }, {
      "height": 300,
      "url": "https://i.scdn.co/image/ab67616d00001e025eab23d2260268d2fab870d0",
      "width": 300
    }, {
      "height": 64,
      "url": "https://i.scdn.co/image/ab67616d000048515eab23d2260268d2fab870d0",
      "width": 64
    }],
    "name": "Heading Home",
    "release_date": "2020-04-01",
    "release_date_precision": "day",
    "total_tracks": 2,
    "type": "album",
    "uri": "spotify:album:3vZaa7OReXh9JIwfq1nWcD"
  },
  "artists": [{
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "name": "Alan Walker",
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
  }, {
    "external_urls": {
      "spotify": "https://open.spotify.com/artist/0x3PXj1WnuW7YsBxQK57xM"
    },
    "href": "https://api.spotify.com/v1/artists/0x3PXj1WnuW7YsBxQK57xM",
    "id": "0x3PXj1WnuW7YsBxQK57xM",
    "name": "Ruben",
    "type": "artist",
    "uri": "spotify:artist:0x3PXj1WnuW7YsBxQK57xM"
  }],
  "disc_number": 1,
  "duration_ms": 184889,
  "explicit": false,
  "external_ids": {
    "isrc": "NOG842002010"
  },
  "external_urls": {
    "spotify": "https://open.spotify.com/track/22O2Zdfj3jnJZDSzlDMAJp"
  },
  "href": "https://api.spotify.com/v1/tracks/22O2Zdfj3jnJZDSzlDMAJp",
  "id": "22O2Zdfj3jnJZDSzlDMAJp",
  "is_local": false,
  "is_playable": true,
  "name": "Heading Home",
  "popularity": 73,
  "preview_url": "https://p.scdn.co/mp3-preview/13ac027f0feccbda1b767686100a89e4ff6859e3?cid=bda39c7852de422b8f3f9e50b526f361",
  "track_number": 1,
  "type": "track",
  "uri": "spotify:track:22O2Zdfj3jnJZDSzlDMAJp"
}]
const App = () => {
  const [artist, setArtist] = useState(artistObj)
  const [tracks, setTracks] = useState(trackObj)
  useEffect(() => {
    searchArtist("Alan Walker");
  }, [])
  // console.log("Artist", artist)
  // console.log("Tracks", tracks)
  function searchArtist(artistQuery) {
    // fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     if (json.artists.total > 0) {
    //       const artist = json.artists.items[0];
    //       setArtist(artist);
    //       fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
    //         .then(response => response.json())
    //         .then(json => { setTracks(json.tracks) })
    //         .catch(error => alert(error.message));
    //     }
    //   })
    //   .catch(error => alert(error.message));
  };

  return (
    <div>
      <h2> Music Master </h2>
      <Search searchArtist={searchArtist} />
      <Artist artist={artist} />
      <Tracks tracks={tracks} />
    </div>
  );
}

export default App;
