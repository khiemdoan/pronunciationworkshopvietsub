import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PlayerWrapper } from '../components/PlayerWrapper'
import { DocumentList } from '../components/DocumentList'

export class Home extends React.Component {

	render() {
		return (
			<div className="container">
				<Header />
				<PlayerWrapper />
				<DocumentList />
				<Footer />
			</div>
		)
	}
}
