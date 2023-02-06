import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export async function getPosts(limit?: boolean) {
  if (limit) {
    return prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 2,
    });
  } else {
    return prisma.post.findMany();
  }
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

export async function createPost(
  post: Pick<
    Post,
    "slug" | "title" | "markdown" | "author" | "source" | "imagePost" | "avatar"
  >
) {
  return prisma.post.create({ data: post });
}
