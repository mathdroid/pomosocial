import Pomo from '../models/pomo';
import cuid from 'cuid';
import slug from 'slug';
import sanitizeHtml from 'sanitize-html';

export function getPomos(req, res) {
  Pomo.find().sort('-dateAdded').exec((err, pomos) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ pomos });
  });
}

export function addPomo(req, res) {
  if (!req.body.pomo.name || !req.body.pomo.title || !req.body.pomo.content) {
    return res.status(403).end();
  }

  const newPomo = new Pomo(req.body.pomo);

  // Let's sanitize inputs
  newPomo.title = sanitizeHtml(newPomo.title);
  newPomo.name = sanitizeHtml(newPomo.name);
  newPomo.content = sanitizeHtml(newPomo.content);

  newPomo.slug = slug(newPomo.title.toLowerCase(), { lowercase: true });
  newPomo.cuid = cuid();
  newPomo.save((err, saved) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.json({ pomo: saved });
  });
}

export function getPomo(req, res) {
  const newSlug = req.query.slug.split('-');
  const newCuid = newSlug[newSlug.length - 1];
  Pomo.findOne({ cuid: newCuid }).exec((err, pomo) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ pomo });
  });
}

export function deletePomo(req, res) {
  const pomoId = req.body.pomoId;
  Pomo.findById(pomoId).exec((err, pomo) => {
    if (err) {
      return res.status(500).send(err);
    }

    pomo.remove(() => {
      res.status(200).end();
    });
  });
}
