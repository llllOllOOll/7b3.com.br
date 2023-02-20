import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function getPostsReverse() {
    return prisma.post.findMany({
      where: {email:"admin@gmail.com"},
      orderBy: {
        createdAt: "desc",
      }
    });
  }

export async function getPosts(limit?: boolean) {
  if (limit) {
    return prisma.post.findMany({
      where:{email:"admin@gmail.com"},
      orderBy: {
        createdAt: "desc",
      },
      take: 2,
    });
  } else {
    return prisma.post.findMany({
      where: {email:"admin@gmail.com"}
    });
  }
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<
    Post,
    "slug" | "title" | "markdown" | "author" | "source" | "imagePost" | "avatar" | "authorId" | "email"
  >
) {
  return prisma.post.create({ data: post });
}
