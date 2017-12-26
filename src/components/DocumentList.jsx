import React from 'react'
import { DocumentItem } from './DocumentItem'

export class DocumentList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			documents: []
		}
	}

	componentDidMount() {
		const self = this
		// get document data
		fetch('documents.json').then(function (response) {
			return response.json()
		}).then(function (array) {
			self.setState({ documents: array })
		})
	}

	render() {
		const items = this.state.documents.map((doc, index) => {
			return (
				<DocumentItem key={index} title={doc.name} href={doc.file} />
			)
		})

		return (
			<div className="documents">
				<h2>Documents</h2>
				<ul>
					{items}
				</ul>
			</div>
		)
	}
}
