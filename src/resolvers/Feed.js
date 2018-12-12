exports.links = (parent, args, context, info) =>
  context.db.query.links({ where: { id_in: parent.linkIds } }, info);
