import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SingelArticles = () => {
	const { user, dbUser } = useContext(AuthContext)
	const post = useLoaderData();
	console.log(post);
	return (
		<section>
			<div>
				<div className='w-11/12 mx-auto md:w-full px-8 lg:w-8/12'>
					<h2 className="font-semibold text-4xl mt-5">{post.title}</h2>
					<div className="flex items-center mt-2 gap-2 text-sm">
						<img className="h-8 w-8 rounded-full ring-2 ring-white" src={post.userImage} alt="" />
						<h3 className="">Alison Dawn</h3>
						<span className='text-xl'>&#x2022;</span>
						<span className="">August 31, 2021</span>
						<span className='text-xl'>&#x2022;</span>
						<span>12 Comment</span>
					</div>
				</div>
				<div className="my-8 w-full flex justify-center">
					<img className="" src={post.image} alt="" />
				</div>
				<div className="my-8 lg:w-8/12 md:w-full px-4 sm:px-8 lg:mx-auto">
					<div className='prose lg:prose-xl'>
						<ReactMarkdown children={post.details} />
					</div>
					<hr />
					<div className="my-6 flex items-center justify-between">
						{/* Tags */}
						<div className='flex items-center'>
							<p>Tags:</p>
							{
								post.tags.map(tag => <button type="button" className="mx-1 px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded focus:outline-none hover:bg-blue-400 hover:text-white" >{tag.label}</button>)
							}
						</div>
						{/* <!-- Share this post --> */}
						<div className="">
							<div className="flex items-center">
								<h3 className="text-md mr-4">Share on</h3>
								<div className='flex gap-2 items-center'>
									<button type="button" className="text-lg"><FaFacebookF /></button>
									<button type="button" className="text-lg"><FaTwitter /></button>
									<button type="button" className="text-lg"><FaLinkedinIn /></button>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- Comment --> */}
					<div>
						<h1 className="font-bold">Comments</h1>
					</div>
					{
						user ? <div className='sm:flex w-full gap-1 items-center flex-col'>
							<textarea name="" id="" className='w-full h-24 border border-blue-400 focus-visible:outline-blue-600 rounded-xl'></textarea>
							<button className='mr-auto bg-blue-100 text-sm text-blue-700 px-4 py-2 rounded-md'>Add Comment</button>
						</div>
							:
							<Link className='text-blue-600 font-bold' to={'/login'}>Please Login To Comment</Link>
					}
					<div className="flex my-8">
						<div className='w-1/12'>
							<img className="h-14 w-14 rounded-full" src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
						</div>
						<div className="w-11/12 bg-gray-200 rounded-lg px-4 py-2">
							<h2 className="font-bold">Oscar Cafeo</h2>
							<p className="mt-3">Far much that one rank beheld bluebird after outside ignobly allegedly more when oh arrogantly vehement tantaneously eel valiantly petted this along across highhandedly much.</p>
						</div>
					</div>
					{/* <!-- Contact --> */}
					{/*<div>
						<section className="bg-white dark:bg-gray-900 ">
							<div className="py-8 lg:py-16 px-4 border-gray-600">
								<h2 className="my-6 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Leave your thought here</h2>
								<form action="#" className="space-y-8">
									<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
										<div>
											<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
											<input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Name" required />
										</div>
										<div>
											<label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
											<input type="email" id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" required />
										</div>
									</div>
									<div>
										<label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
										<input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
									</div>
									<div className="sm:col-span-2">
										<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
										<textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
									</div>
									<button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
								</form>
							</div>
						</section>
					</div>*/}
				</div>
			</div>
		</section>
	);
};

export default SingelArticles;
