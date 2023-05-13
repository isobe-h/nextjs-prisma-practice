import type { GetServerSideProps } from 'next'
import React from 'react'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/Layout'
import type { PostProps } from '../../components/Post'

// eslint-disable-next-line unused-imports/no-unused-vars
export const getServerSideProps: GetServerSideProps = async ({ param }) => {
	const post = {
		id: '1',
		title: 'Prisma is the perfect ORM for Next.js',
		content:
			'[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!',
		published: false,
		author: {
			name: 'Nikolas Burk',
			email: 'burk@prisma.io',
		},
	}
	return {
		props: post,
	}
}

const Post: React.FC<PostProps> = (props) => {
	let { title } = props
	if (!props.published) {
		title = `${title} (Draft)`
	}

	return (
		<Layout>
			<div>
				<h2>{title}</h2>
				<p>By {props?.author?.name || 'Unknown author'}</p>
				<ReactMarkdown children={props.content} />
			</div>
			<style jsx>{`
				.page {
					background: white;
					padding: 2rem;
				}

				.actions {
					margin-top: 2rem;
				}

				button {
					background: #ececec;
					border: 0;
					border-radius: 0.125rem;
					padding: 1rem 2rem;
				}

				button + button {
					margin-left: 1rem;
				}
			`}</style>
		</Layout>
	)
}

export default Post