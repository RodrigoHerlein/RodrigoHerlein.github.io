class MiComponente extends HTMLElement {

constructor(){
	super();
	this.innerHTML = '<p>2012</p>';
}
}
customElements.define("team-e",MiComponente);
