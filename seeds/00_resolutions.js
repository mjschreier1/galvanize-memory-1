
exports.seed = function(knex, Promise) {
  return knex("resolution").del()
    .then(() => {
      return knex("resolution").insert([
        { id: 1, due_date: "1997-02-01", resolution: "Go skiing" },
        { id: 2, due_date: "1997-05-01", resolution: "Do stand-up" },
        { id: 3, due_date: "1997-09-01", resolution: "Start knitting" }
      ]);
    })
    .then(() => knex.raw("ALTER SEQUENCE resolution_id_seq RESTART WITH 4"));
};
