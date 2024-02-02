# Patientor

> ### Assignment
>
> For this set of exercises, you will be developing a backend for an existing project called Patientor, which is a simple medical record application for doctors who handle diagnoses and basic health information of their patients.
>
> The frontend has already been built by outsider experts and your task is to create a backend to support the existing code.

This project's frontend is cloned from here: https://github.com/jenjei/patientor (forked repository)

## What I learned about git

I had no clue why I wasn't allowed to commit forked and cloned repositories properly? Git was suggesting to `git submodule add <url> part9-typescript/patientor/frontend` ??? I tried to remove .git folder in /frontend/patientor but didn't solve this problem.

Locally I had the frontend as supposed and it was working correctly.

<b>Solution:</b> delete old frontend folder, commit to github the deleted folder, clone the forked repository again, delete .git folder in `/patientor/frontend/patientor` and push to github 8)

## How to compile

Frontend has instructions in README and backend has package.json scripts
