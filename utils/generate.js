const slugify  = require('slugify');
const crypto   = require('crypto');
const mongoose = require('mongoose');
const conn = mongoose.createConnection('mongodb://127.0.0.1:27017/fashion_web25');
const schemaSanPham = require('../model/schemaSanPham');

exports.makeSlug = (name, id) =>
  slugify(`${name}-${id}`, { lower: true, strict: true });

exports.makeSku = async () => {
  while (true) {
    const sku = `${crypto.randomBytes(4).toString('hex').toUpperCase()}_` +
                `${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
    const exists = await conn.model('san_pham', schemaSanPham).exists({ 'variants.sku': sku });
    if (!exists) return sku;
  }
};
