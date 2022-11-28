import { Octokit } from "@octokit/core";
import { PERSONAL_ACCESS_TOKEN } from "../const";

const octokit = new Octokit({ auth: PERSONAL_ACCESS_TOKEN });
export const getRandomUser = async () => {
  const users = await octokit.request(`GET /users{?since}`, {
    since: Math.floor(Math.random() * 1000) + 1,
  });
  return users;
};
