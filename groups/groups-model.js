const db = require('../data/dbConfig.js');

module.exports = {
  addGroup,
  getGroupByName,
  addUserToGroup,
  allUsersInGroup
};

async function addGroup(group) {
  const { rowCount } = await db('groups').insert(group);
  // const [res] = await db('groups').insert(group); // for dev env
  return rowCount;
}

function getGroupByName(name) {
  return db('groups')
    .select()
    .where({ name })
    .first();
}

async function addUserToGroup(user_id, group_id) {
  const response = await db('users_groups').insert(user_id, group_id);
  // const [added] = await db('users_groups').insert(user_id, group_id); // for dev env
  return response;
}

async function allUsersInGroup(group_id) {
  const response = await db('users_groups')
    .select('user_id')
    .where({ group_id });
  return response;
}
