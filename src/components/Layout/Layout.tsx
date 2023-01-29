import React from 'react';
import { Header } from '../MockHeader';
import {Footer} from "../MockFooter"

// import { Footer } from 'components/commons/Footer/Footer';
// import { Header } from 'components/commons/Header';


interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({
	children
}) => {
	return (
		<div>
			<Header/>
			<main className="pt-[72px]">{children} </main>
			<Footer />

		</div>
	);
};