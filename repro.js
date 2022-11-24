const turfUnion = require('@turf/union').default;
const turfTruncate = require('@turf/truncate').default;

const agg = require('./agg.geojson.json');
const obj = require('./objectiveGeoData.geojson.json');

const aggt = turfTruncate(agg, { mutate: true });
const objt = turfTruncate(obj, { mutate: true });

turfUnion(aggt, objt)
