"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Modal(props: {
	isModalOpen: boolean;
	closeModal: () => void;
}) {
	const { isModalOpen, closeModal } = props;

	return (
		<div>
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
						onClick={closeModal}
					>
						<motion.div
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -50, opacity: 0 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
							className="bg-white rounded-lg p-8 max-w-md w-full relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
							>
								<X size={24} />
							</button>
							<h2 className="text-2xl font-bold mb-4">
								Oops! This one’s under lock and key 🛠️🔒
							</h2>
							<p className="text-gray-600">
								It’s a private project that I can’t showcase
								publicly, but I’d love to share the juicy
								details with you!
								<a
									target="_blank"
									href="https://wa.me/212637403791"
									className="text-blue-500 hover:underline"
								>
									{" "}
									Drop me a DM{" "}
								</a>
								or
								<a
									target="_blank"
									href="mailto:naciritaoufikmed@gmail.com"
									className="text-blue-500 hover:underline"
								>
									{" "}
									shoot me an email{" "}
								</a>
								, and we’ll chat! 📧🚀
							</p>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
