import { base_uri, people_url } from './confing.js'

const lukeUrl = `${base_uri}${people_url.replace(':id', 1)}`;
const option = { crossDomain: true };

//this is the way to call jQuery
$.get(lukeUrl, option)