<!-- Advanced seacrch page -->

<?php

//$q = '';
include "head.html";
include "Skip_links.html";
include "header.html";

?>

<html>
<head>
</head>

<body>    
<div id="main" class="main" role="main">

	<svg aria-hidden="true" focusable="false" class="sprite-set">
		<symbol id="sets-default-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1024"><path d="M872.371 710.502c-11.085-11.962-22.915-20.646-34.278-29.068-18.026-13.35-33.488-24.76-40.125-45.049-26.827-109.237-78.594-226.06-118.253-299.411-3.284-14.594-4.284-30.097-5.1-45.145-.092-.382-1.002-14.761-1.096-16.268.094-1.388.466-7.369.466-7.465 0-13.565-3.82-22.895-11.201-28.686-12.459-9.832-28.201-3.852-33.278-1.888-8.103 2.99-17.394 1.603-28.201 0 .442 0-54.306-6.436-54.306-6.436.075 0-32.299-2.799-32.299-2.799-13.554 0-23.473 11.962-26.851 23.158a11.486 11.486 0 0 0-.536 2.249l-.814 5.335c-.186.836-.186 1.674-.186 2.512.092 8.612 3.912 16.172 10.641 20.837l13.367 9.163c-.092-.096 18.026 12.633 23.195 16.174 6.915 8.97 10.107 16.722 10.107 25.598v.382c-1.63 2.441-4.192 6.627-4.192 6.627-9.641 15.336-18.63 29.739-29.459 40.934-.466.575-3.913 4.497-3.913 4.497-3.004 3.183-8.009 8.494-9.477 17.944a10.983 10.983 0 0 0-.258 2.321c0 8.803 4.448 17.01 11.085 25.144-7.451-7.847-16.09-14.02-24.102-15.981-9.827-2.321-19.19.742-25.011 8.325-1 1.314-2.19 3.446-2.724 4.953-3.098 8.972-5.823 14.379-7.825 17.942l-.652-.191c-5.985-10.837-28.365-50.743-28.365-50.743-58.032-105.602-86.419-151.871-113.806-150.938-44.129 5.239-75.59 2.895-122.257-1.674a21.58 21.58 0 0 0-3.541 0c-16.37 1.865-35.302 24.856-35.302 38.422v2.319c0 7.489 5.356 13.925 12.645 14.954l2.282.287c34.022 4.76 36.84 16.819 36.84 30.838 0 0-.186 3.183-.372 5.144-8.825 34.666-18.28 53.639-27.199 68.782-1.374 2.345-2.446 6.34-2.446 9.068 0 11.387 9.361 20.55 19.818 27.01-2.632-.573-5.449-1.505-7.825-1.604-15.276-.741-21.726 8.518-23.823 12.442-.464.836-1.094 2.512-1.374 3.348-18.28 58.783-39.286 118.521-66.043 187.662-1.094 1.865-5.543 9.068-5.543 9.068-17.838 29.713-34.558 57.656-67.859 73.184-2.376 1.126-5.379 3.637-6.917 5.791C2.096 735.263.001 741.89.001 748.9c0 7.107 2.19 14.02 6.195 19.451 7.101 9.521 18.652 13.087 29.387 8.972 1.444-.48 3.354-1.58 4.541-2.536 33.37-26.436 76.78-35.958 132.716-29.044 1.096.096 2.818.172 3.82.096 12.737-1.222 22.1-11.962 23.194-26.747.094-.172.186-2.608.186-2.608 0-15.432-8.359-27.657-20.818-30.839-.746-.191-1.469-.382-2.284-.478-5.728-.551-7.357-2.225-8.733-4.569-.278-3.183-1.722-21.485-1.722-21.485 0-45.049 19.002-100.577 58.126-169.527.906-1.411.906-1.029 1.256-2.632l1.934-10.551c.075-.573.075-.838.075-1.029 0-.287-.075-.287-.258-1.413l-.37-2.152c-.188-1.101-.538-2.321-1.004-3.35-2.91-7.296-10.083-13.923-18.372-19.258 13.645 2.608 25.661-.935 32.927-9.81l5.543-8.23 3.912-6.723 2.562-4.019 3.54-6.818c.374-.48.722-1.413.908-1.963 0 0 2.376-6.171 2.538-6.46 2.282.935 4.471 1.772 4.471 1.772C334.855 441.449 399.99 686.289 406.72 763.3v.191c0 13.087 7.383 25.503 18.654 30.264l14.904 1.029c3.096.287 1.932-.172 4.564-1.961l5.635-3.828 20.284-18.302 56.402-53.279c13.926-10.192 17.092-25.049 18.746-32.992.258-1.126.444-2.799.444-4.306 0-1.483-.186-2.992-.348-4.019l-.186-.551c-.094-.741-.374-1.222-.56-1.867-8.639-22.441-18.374-46.628-31.275-71.677-6.381-13.087-9.571-25.694-9.571-38.135 0-14.57 4.006-27.943 8.663-43.447 4.89-16.555 9.989-33.565 11.551-54.666v-1.125c0-1.318-.094-2.895-.28-4.019-1.91-8.518-7.009-17.393-13.46-25.24 1.352 1.41 1.91 2.895 3.54 4.21.186.191 2.282 2.152 2.282 2.152.186.097 15.184 9.714 15.184 9.714 2.282.742 11.457 3.277 19.188 1.029l.094-.096s0 .096-.094.096c1.91-.573 3.564-1.509 5.193-2.703 1.816-1.316 3.633-2.823 5.356-4.306 3.471.551 7.919 2.249 12.832 10.742 30.483 50.456 55.68 108.592 74.962 172.901 3.098 15.502 4.634 27.01 4.634 35.886 0 12.225-2.91 16.913-5.169 19.425l-5.1 4.499c-10.107 9.235-20.47 18.685-29.203 23.924-3.376 2.057-6.823 5.885-7.731 9.808l-.28 1.125c0-.193-1.91 12.798-1.91 12.798l5.915 17.944c5.729 7.105 14.554 10.286 26.105 9.426 2.912-.263 7.103-1.963 9.455-3.828 9.827-8.038 22.938-14.379 40.218-19.523 32.555-5.98 60.849-5.431 86.419-3.828 18.816 2.895 42.103 7.083 64.483 17.466.56.287 1.188.573 1.91.739 13.647 4.116 26.851.575 34.396-9.33.092 0 5.448-16.364 5.448-16.364l-4.074-15.408c-.746-2.439-.84-1.603-2.562-3.372zM62.136 638.536s3.004-4.857 4.378-7.202a4705.767 4705.767 0 0 0 21.564-57.274c-3.47-20.192-5.565-40.839-5.565-62.06 0-72.419 20.844-139.909 56.31-196.801-10.271-6.746-17-18.517-17-31.602v-2.321c0-25.982 28.643-57.849 54.748-60.935 0 0 8.105-.096 8.197-.096a1622.75 1622.75 0 0 0 35.21 3.181c60.571-48.782 136.721-78.232 219.578-78.232 75.87 0 146.198 24.666 204.136 66.342 14.834-.742 25.569 4.401 32.556 9.834 7.475 5.98 16.114 16.626 18.746 35.048C757.753 322.473 796.503 412.571 796.503 512c0 11.866-.626 23.637-1.722 35.241 9.197 27.177 17.372 54.857 24.102 82.036 3.47 10.382 11.201 17.775 23.567 27.296 15.462-45.312 24.009-93.926 24.009-144.573 0-241.85-191.563-438.577-426.904-438.577C204.235 73.423 12.649 270.15 12.649 512c0 55.887 10.387 109.165 28.925 158.403 7.195-9.619 13.645-20.361 20.562-31.867zm708.262 120.745c6.101 1.029 12.553 2.152 19.026 3.54-77.244 113.377-205.232 187.757-349.868 187.757-140.819 0-265.895-70.456-343.675-178.785 21.308-5.885 45.851-7.081 74.426-3.637-.186 0 8.453.193 8.453.193 1.724-.193 3.376-.645 5.007-1.029 64.947 68.687 155.559 111.488 255.788 111.488 102.977 0 195.683-45.409 260.888-117.373 25.755-3.637 48.857-3.374 69.955-2.154z"></path></symbol>
		<symbol id="sets-znr-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path fill="#000" d="M.291 6.184L7.287 0l3.559 4.028-6.996 6.184L.291 6.184zm27.929 0l-3.559 4.028-6.996-6.184L21.224 0l6.996 6.184zM0 22.183l3.254-3.066 5.378 7.504-2.447 2.152L0 22.184zm28.5 0l-3.254-3.066-5.378 7.504 2.447 2.152 6.185-6.589zm-2.07-7.684l-7.591.798-4.555 6.617-4.547-6.606-7.648-.804L14.284 32 26.43 14.499zM14.284 3.034L2.087 13.791l7.739.814 4.459-3.986 4.448 3.977 7.692-.809-12.14-10.752z"></path></symbol>
		<symbol id="sets-znc-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path d="M12.827 4.718C11.48 3.372 10.147 2.01 8.799.667c-2.188 1.54-4.222 3.342-5.83 5.492C1.462 8.209.458 10.624.001 13.123c.009.007.018.016.028.02 1.061.45 3.037 1.631 3.843 3.166.699 1.226.709 2.673.67 4.045.593-.606 1.197-1.199 1.79-1.8-.63-.661-1.285-1.296-1.926-1.943.641-.647 1.292-1.29 1.928-1.945-1.323-1.329-2.645-2.656-3.962-3.991 2.341-2.346 4.673-4.704 7.01-7.056 1.153 1.149 2.292 2.311 3.443 3.464.004-.79 0-1.579.002-2.367zm-3.449.308c1.154 1.159 2.315 2.312 3.449 3.491v5.277c-1.859 1.881-.928.942-2.792 2.817 1.866 1.871.935.933 2.792 2.813v5.301a434.375 434.375 0 01-3.449 3.473 2493.068 2493.068 0 01-5.609-5.657c1.316-1.333 2.635-2.66 3.957-3.985-.628-.668-1.306-1.286-1.924-1.962.657-.624 1.281-1.283 1.924-1.924a1862.623 1862.623 0 00-3.962-3.989c1.874-1.883 3.743-3.772 5.615-5.655zm.011 15.564c-.653.643-1.289 1.304-1.939 1.949.635.661 1.29 1.3 1.938 1.949.649-.641 1.283-1.3 1.932-1.943-.634-.663-1.298-1.292-1.93-1.955zM9.382 8.733c-.643.652-1.293 1.297-1.938 1.947.647.647 1.296 1.292 1.934 1.949.649-.647 1.302-1.292 1.938-1.953-.643-.649-1.282-1.303-1.934-1.943zM2.951 23.242c-.322.333-.645.665-.975.992l8.655 8.433h2.195v-6.524c-1.154 1.149-2.293 2.312-3.449 3.459-2.143-2.121-4.276-4.248-6.427-6.36zm23.098 0c-2.151 2.112-4.284 4.239-6.427 6.36-1.156-1.147-2.295-2.31-3.449-3.459v6.524h2.195l8.655-8.433a70.113 70.113 0 01-.975-.992zM19.618 8.733c-.652.64-1.29 1.294-1.934 1.943.636.661 1.288 1.306 1.938 1.953.637-.657 1.287-1.302 1.934-1.949-.645-.65-1.295-1.295-1.938-1.947zM19.61 20.59c-.632.663-1.296 1.292-1.93 1.955.649.643 1.283 1.302 1.932 1.943.647-.649 1.302-1.288 1.938-1.949-.651-.645-1.287-1.306-1.939-1.949zm.012-15.564c1.872 1.883 3.741 3.772 5.615 5.655a1862.623 1862.623 0 00-3.962 3.989c.643.641 1.267 1.3 1.924 1.924-.618.676-1.296 1.294-1.924 1.962a1144.57 1144.57 0 013.957 3.985 2720.764 2720.764 0 01-5.609 5.657 451.687 451.687 0 01-3.449-3.473v-5.301c1.857-1.879.927-.942 2.792-2.813-1.864-1.875-.933-.936-2.792-2.817V8.517c1.134-1.18 2.295-2.332 3.449-3.491zm-3.449-.308c.002.788-.002 1.577.002 2.367 1.151-1.153 2.29-2.315 3.443-3.464 2.337 2.352 4.67 4.71 7.01 7.056-1.317 1.335-2.639 2.662-3.962 3.991.636.655 1.287 1.298 1.928 1.945-.641.647-1.296 1.282-1.926 1.943.593.601 1.197 1.193 1.79 1.8-.039-1.372-.029-2.819.67-4.045.806-1.535 2.782-2.716 3.843-3.166.011-.005.019-.014.028-.02-.457-2.499-1.461-4.915-2.968-6.965-1.608-2.15-3.643-3.952-5.83-5.492-1.349 1.343-2.682 2.704-4.028 4.051z"></path></symbol>
		<symbol id="sets-zne-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16"><path d="M5.353.009l.868 1.682.033 2.081 2.255 3.612c.297.863.24 1.75-.168 2.662.929-1.43 1.239-2.429.93-2.997-.309-.569-1.013-1.722-2.113-3.46l.008-1.937.712-1.643 4.649 7.556-4.649 8.425-.804-1.383.009-2.22-2.432-3.35c-.408-.691-.34-1.505.205-2.44-1.11 1.113-1.431 2.042-.964 2.787l2.236 3.189-.014 2.025-.76 1.392L.001 8 5.353.008z" fill="#000" fill-rule="nonzero"></path></symbol>
	</svg>
	<h1 class="visuallyhidden">Advanced Search</h1>
	
	<form class="form-layout advanced-search" action="search.php">
		<div class="inner-flex">
			<div class="form-row">
				<label class="form-row-label" for="q">
					<svg focusable="false" aria-hidden="true" width="33" height="24" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg">
						<g fill-rule="evenodd">
							<path d="M2.12 5V3c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v2h-28zm0 3h28V6h-28v2zm28 13c0 .55-.45 1-1 1h-26c-.55 0-1-.45-1-1V9h28v12zm-1-21h-26c-1.66 0-3 1.34-3 3v18c0 1.66 1.34 3 3 3h26c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z"></path>
							<path d="M17.121 18h10v-1h-10v1zm0-3h10v-1h-10v1zM5.12 21c.03-1.11.95-2 2.06-2h.44c.39 0 .75-.24.91-.6.16-.36.09-.79-.18-1.08-.75-.81-1.23-2.14-1.23-3.38 0-1.79.98-2.94 2.5-2.94s2.5 1.15 2.5 2.94c0 1.24-.48 2.57-1.23 3.38-.27.29-.34.72-.18 1.08.16.36.52.6.91.6h.44c1.11 0 2.03.89 2.06 2h.995a3.057 3.057 0 0 0-3.054-3h-.44c.91-.98 1.5-2.54 1.5-4.06 0-2.49-1.57-3.94-3.5-3.94s-3.5 1.45-3.5 3.94c0 1.52.59 3.08 1.5 4.06h-.44a3.057 3.057 0 0 0-3.054 3h.994-.001z"></path>
						</g>
					</svg>
				Card Name
				</label>
				<div class="form-row-content">
					<div class="form-row-content-band">
						<input type="text" name="q" id="q" class="form-input" placeholder="Any words in the name, e.g. “Edward”" autocorrect="off" spellcheck="false">
					</div>
					<fieldset>
						<div class="form-row-content-band short">
							<label class="visuallyhidden" for="nameComparison">Name Comparison</label>
							<select class="form-input auto" name="nameComparison" id="nameComparison">
								<option value="All">All of these words</option>
								<option value="Any">Any of these words</option>
								<option value="Exact">This exact phrase</option>
							</select>
						</div>
					</fieldset>
					<p class="form-row-tip">Enter text that should appear in the card name or subname. Separate name and subname by using a comma and a space.</p>
				</div>
			</div>
			
			<div class="form-row">
				<label class="form-row-label" for="x">
					<svg focusable="false" aria-hidden="true" width="29" height="32" viewBox="0 0 29 32" xmlns="http://www.w3.org/2000/svg">
						<g fill-rule="evenodd">
							<path d="M23.12 29c1.1 0 2-.9 2-2V7h1v23h-22v-1h19zm-21-22h21v20h-21V7zm0-4c0-.55.45-1 1-1h22c.55 0 1 .45 1 1v3h-1V2l-2 4h-21V3zm2 29h22c1.1 0 2-.9 2-2V3c0-1.66-1.34-3-3-3h-22c-1.66 0-3 1.34-3 3v24c0 1.1.9 2 2 2v1c0 1.1.9 2 2 2z"></path>
							<path d="M4.121 11h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1zm0 3h17v-1h-17v1z"></path>
						</g>
					</svg>
					Text
				</label>
			
				<div class="form-row-content">
					<div class="form-row-content-band">
						<input type="text" name="x" id="x" class="form-input" placeholder="Any text, e.g. “draw a card”" autocorrect="off" spellcheck="false">
					</div>
					<fieldset>
						<div class="form-row-content-band short">
							<label class="visuallyhidden" for="textComparison">Text Comparison</label>
							<select class="form-input auto" name="textComparison" id="textComparison">
								<option value="All">All of these words</option>
								<option value="Any">Any of these words</option>
								<option value="Exact">This exact phrase</option>
							</select>
						</div>
					</fieldset>
					<p class="form-row-tip">Enter text that should appear in the text box.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="t[]">
					<svg focusable="false" aria-hidden="true" width="12" height="15" viewBox="0 0 12 15" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 13h1.718c.446 0 .607-.046.77-.134.163-.087.29-.215.378-.378.088-.163.134-.324.134-.77V2.282c0-.446-.046-.607-.134-.77-.087-.163-.215-.29-.378-.378-.163-.088-.324-.134-.77-.134H2.282c-.446 0-.607.046-.77.134-.163.087-.29.215-.378.378-.088.163-.134.324-.134.77v9.436c0 .446.046.607.134.77.087.163.215.29.378.378.163.088.324.134.77.134H4c0-.552.895-1 2-1s2 .448 2 1zM1 0h10c.552 0 1 .448 1 1v13c0 .552-.448 1-1 1H1c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1zm5 13.5c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5z" fill="#000" fill-rule="evenodd"></path>
					</svg>
					Card Types
				</label>
				
				<div class="form-row-content">
					<fieldset>
						<legend class="visuallyhidden">Card Type</legend>
						<div class="form-row-content-band">
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Advantage">Advantage
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Ally">Ally
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Attachment">Attachment
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Event">Event
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Leader">Leader
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Location">Location
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="t[]" id="false" value="Stone">Stone
							</label>
						</div>
					</fieldset>
					<div><br></div>
					<fieldset>
						<label class="advanced-search-checkbox small-columns">
							<input type="checkbox" name="typeNot" id="false" value="Not">Not
						</label>
					</fieldset>
					<p class="form-row-tip">
						Choose any card types to match.
					</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="p[]">
					<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
						<path d="M3 2v26h24v-26h-24zm4 24h-2v-22h2v22zm18 0h-16v-22h16v22zm-2-18h-12v2h12v-2zm0 4h-12v2h12v-2z"></path>
					</svg>
				Subtypes
				</label>
				
				<div class="form-row-content">
					<div class="form-row-content-band">
						<select name="p[]" id="p[]" multiple="" data-component="advanced-search-autocomplete" data-placeholder="Enter a subtype or choose from the list" data-allow-entry="true" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
							<optgroup label="Character Types">
								<option data-pol="+" data-item="5th Laboratory" value="5th Laboratory">5th Laboratory</option>
								<option data-pol="+" data-item="Chimera" value="Chimera">Chimera</option>
								<option data-pol="+" data-item="Construct" value="Construct">Construct</option>
								<option data-pol="+" data-item="Hero" value="Hero">Hero</option>
								<option data-pol="+" data-item="Human" value="Human">Human</option>
								<option data-pol="+" data-item="Ishbalite" value="Ishbalite">Ishbalite</option>
								<option data-pol="+" data-item="Mob" value="Mob">Mob</option>
								<option data-pol="+" data-item="Shadow" value="Shadow">Shadow</option>
								<option data-pol="+" data-item="Sin" value="Sin">Sin</option>
								<option data-pol="+" data-item="Soldier" value="Soldier">Soldier</option>
								<option data-pol="+" data-item="Spirit" value="Spirit">Spirit</option>
								<option data-pol="+" data-item="State Alchemist" value="State Alchemist">State Alchemist</option>
								<option data-pol="+" data-item="Villain" value="Villain">Villain</option>
								<option data-pol="+" data-item="Zealot" value="Zealot">Zealot</option>
							</optgroup>
							<optgroup label="Attachment Types">
								<option data-pol="+" data-item="Armor" value="Armor">Armor</option>
								<option data-pol="+" data-item="Auto-mail" value="Auto-mail">Auto-mail</option>
								<option data-pol="+" data-item="Item" value="Item">Item</option>
								<option data-pol="+" data-item="Mark" value="Mark">Mark</option>
								<option data-pol="+" data-item="Vehicle" value="Vehicle">Vehicle</option>
								<option data-pol="+" data-item="Weapon" value="Weapon">Weapon</option>
							</optgroup>
							<optgroup label="Location Types">
								<option data-pol="+" data-item="Central City" value="Central City">Central City</option>
								<option data-pol="+" data-item="Linter" value="Linter">Linter</option>
								<option data-pol="+" data-item="Liore" value="Liore">Liore</option>
								<option data-pol="+" data-item="Resembool" value="Resembool">Resembool</option>
								<option data-pol="+" data-item="Youswell" value="Youswell">Youswell</option>
							</optgroup>
						</select>
					</div>
					<fieldset>
						<div class="form-row-content-band short">
							<label class="visuallyhidden" for="subtypeComparison">Subtype Comparison</label>
							<select class="form-input auto" name="subtypeComparison" id="subtypeComparison">
								<option value="All">All of these parameters</option>
								<option value="Any">Any of these parameters</option>
							</select>
						</div>
					</fieldset>
					<p class="form-row-tip">
					Enter any subtype to match.
					Click the "IS" or "NOT" button to toggle between including and excluding a type.
					</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="f">
					<svg focusable="false" aria-hidden="true" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg">
						<g fill-rule="evenodd">
							<path d="M15.39 14.52c-.23-.5-.83-.71-1.33-.48-.5.24-.72.83-.48 1.33.68 1.46 1.86 4.11 2.99 6.93 1.13 2.83 2.23 5.85 2.75 7.99.14.54.68.87 1.22.73.53-.13.86-.67.73-1.21-.58-2.32-1.7-5.38-2.85-8.25-1.15-2.87-2.33-5.54-3.03-7.04"></path>
							<path d="M28.72 25.19c-2.24-6.88-6.07-15.03-6.12-15.15-1.55-3.28-4.86-5.39-8.47-5.39-1.39 0-2.75.31-4.01.91a9.366 9.366 0 0 0-4.8 5.35 9.36 9.36 0 0 0-.55 3.17c0 1.38.3 2.75.91 4.03 1.02 2.17 2.47 5.51 3.7 8.68a1.001 1.001 0 0 0 1.846.039 1 1 0 0 0 .014-.769c-1.25-3.22-2.71-6.58-3.75-8.8a7.385 7.385 0 0 1-.72-3.18c0-.84.14-1.68.43-2.5.67-1.87 2-3.36 3.78-4.21 1.01-.48 2.05-.72 3.15-.72 2.82 0 5.45 1.67 6.66 4.24.04.08 3.85 8.22 6.03 14.92a1 1 0 0 0 1.9-.62"></path>
							<path d="M30.86 20.78a.99.99 0 0 0 .58-1.29c-2.34-6.05-4.98-11.57-5.02-11.67v.01C24.14 3.06 19.25 0 13.93 0c-2.05 0-4.05.45-5.91 1.33-1.1.51-2.12 1.17-3.03 1.93a1 1 0 1 0 1.29 1.53A11.861 11.861 0 0 1 13.93 2c4.54 0 8.75 2.64 10.69 6.69v.01c.02.04 2.65 5.55 4.95 11.51.2.52.78.77 1.29.57m-29.4-1.2c.46.97 1 2.13 1.55 3.4.23.5.82.73 1.32.51.51-.22.74-.81.51-1.32-.56-1.28-1.1-2.46-1.57-3.45-.77-1.6-1.15-3.3-1.15-5.01a11.67 11.67 0 0 1 .91-4.5.997.997 0 0 0-.54-1.3.98.98 0 0 0-1.3.53c-.09.22-.18.44-.26.66-.54 1.5-.81 3.06-.81 4.61 0 2.01.45 4.01 1.34 5.87"></path>
							<path d="M19.14 12.38c-.83-1.85-2.63-3.08-4.63-3.08-.76 0-1.51.18-2.2.53-.8.4-1.47 1-1.96 1.74a.999.999 0 0 0 .27 1.39c.46.31 1.08.18 1.39-.28.31-.46.72-.82 1.2-1.07.43-.21.85-.31 1.3-.31 1.16-.01 2.28.72 2.8 1.9v-.01c.02.04.55 1.23 1.3 3.04.21.51.79.75 1.3.54.51-.21.76-.8.54-1.31-.76-1.82-1.29-3.03-1.31-3.08m5.33 17.88a.99.99 0 0 0 .74-1.2c-.56-2.4-1.53-5.28-2.54-7.98-.19-.52-.77-.78-1.29-.59-.51.2-.78.77-.58 1.29.99 2.66 1.94 5.49 2.47 7.74.12.53.66.87 1.2.74m-9.76-.8c.16.53.72.83 1.25.66.53-.16.82-.72.66-1.25-1.15-3.74-3.08-8.55-4.33-11.48-.22-.5-.81-.74-1.32-.52-.5.22-.74.8-.52 1.31 1.23 2.88 3.15 7.67 4.26 11.28"></path>
						</g>
					</svg>
					Faction
				</label>
		
				<div class="advanced-search-row-content js-advanced-search-duplicant">
					<fieldset>
						<legend class="visuallyhidden">Faction</legend>
						<div class="form-row-content-band">
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="f[]" id="false" value="Elric">Elric
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="f[]" id="false" value="Homunculus">Homunculus
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="f[]" id="false" value="Military">Military
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="f[]" id="false" value="Rebel">Rebel
							</label>
							<label class="advanced-search-checkbox small-columns">
								<input type="checkbox" name="f[]" id="false" value="Unalligned">Unalligned
							</label>
						</div>
					</fieldset>
					<div><br></div>
					<fieldset>
						<label class="advanced-search-checkbox small-columns">
							<input type="checkbox" name="factionNot" id="false" value="Not">Not
						</label>
					</fieldset>

					<p class="form-row-tip">
						Choose factions to match.
						Click the "IS" or "NOT" button to toggle between including and excluding a type.
					</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="stat_1">
					<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
						<path d="M22 11c-2.393 0-4.534.66-6 1.7v-6.7c0-2.762-3.582-5-8-5s-8 2.238-8 5v16c0 2.762 3.582 5 8 5 2.512 0 4.751-.725 6.218-1.857.828 2.21 3.994 3.857 7.782 3.857 4.418 0 8-2.238 8-5v-8c0-2.762-3.582-5-8-5zm-14-8c3.434 0 6 1.584 6 3s-2.566 3-6 3-6-1.584-6-3 2.566-3 6-3zm-6 6.3c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm0 4c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7zm6 7.7c-3.434 0-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7c0 1.416-2.566 3-6 3zm20-1c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm0-4c0 1.416-2.566 3-6 3s-6-1.584-6-3v-.7c1.466 1.04 3.607 1.7 6 1.7s4.534-.66 6-1.7v.7zm-6-1c-3.434 0-6-1.584-6-3s2.566-3 6-3 6 1.584 6 3-2.566 3-6 3z"></path>
					</svg>
					Command, Level
					Cost, or Points
				</label>
				<div class="advanced-search-row-content js-advanced-search-duplicant">
					<div class="form-row-content-band js-advanced-search-duplicant-template">
						<label class="visuallyhidden" for="stat_1">Stat 1</label>
						<select name="stat_1" id="stat_1" class="form-input auto small-select">
							<option selected="selected" value="level">Level</option>
							<option value="command">Command</option>
							<option value="cost">Cost</option>
							<option value="points">Points</option>
						</select>
						
						<label class="visuallyhidden" for="stat_1_mode">Stat 1 requirement</label>
						<select name="stat_1_mode" id="stat_1_mode" class="form-input auto small-select">
							<option value="=">equal to</option>
							<option value="<">less than</option>
							<option value=">">greater than</option>
							<option value="<=">less than or equal to</option>
							<option value=">=">greater than or equal to</option>
							<option value="!=">not equal to</option>
						</select>
						
						<label class="visuallyhidden" for="stat_1_value">Stat 1 value</label>
						<input type="number" name="stat_1_value" id="stat_1_value" class="form-input auto small-select" placeholder="Any value, e.g. “2”" pattern="d*">
					</div>

					<div class="advanced-search-row-content js-advanced-search-duplicant">
						<div class="form-row-content-band js-advanced-search-duplicant-template">
							<label class="visuallyhidden" for="stat_2">Stat 2</label>
							<select name="stat_2" id="stat_2" class="form-input auto small-select">
								<option selected="selected" value="level">Level</option>
								<option value="command">Command</option>
								<option value="cost">Cost</option>
								<option value="points">Points</option>
							</select>
							
							<label class="visuallyhidden" for="stat_2_mode">Stat 2 requirement</label>
							<select name="stat_2_mode" id="stat_2_mode" class="form-input auto small-select">
								<option value="=">equal to</option>
								<option value="<">less than</option>
								<option value=">">greater than</option>
								<option value="<=">less than or equal to</option>
								<option value=">=">greater than or equal to</option>
								<option value="!=">not equal to</option>
							</select>
							
							<label class="visuallyhidden" for="stat_2_value">Stat 2 value</label>
							<input type="number" name="stat_2_value" id="stat_2_value" class="form-input auto small-select" placeholder="Any value, e.g. “2”" pattern="d*">
						</div>

						<p class="form-row-tip js-advanced-search-row-tip">Restrict cards based on their level, command, cost, or points.</p>
					</div>
				</div>
			</div>
			
			<div class="form-row">
				<label class="form-row-label" for="strength">
					<svg focusable="false" aria-hidden="true" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z"></path>
					</svg>
					Strength
				</label>
				<div class="advanced-search-row-content js-advanced-search-duplicant">
					<div class="form-row-content-band js-advanced-search-duplicant-template">

						<label class="visuallyhidden" for="strength_mode">Strength requirement</label>
						<select name="strength_mode" id="strength_mode" class="form-input auto small-select">
							<option value="=">equal to</option>
							<option value="<">less than</option>
							<option value=">">greater than</option>
							<option value="<=">less than or equal to</option>
							<option value=">=">greater than or equal to</option>
							<option value="!=">not equal to</option>
						</select>

						<label class="visuallyhidden" for="s">Strength value</label>
						<input type="number" name="s" id="s" class="form-input auto small-select" placeholder="Any value, e.g. “2”" pattern="d*">
					</div>
					<p class="form-row-tip js-advanced-search-row-tip">Restrict cards based on their strength.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="wits">
					<svg focusable="false" aria-hidden="true" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z"></path>
					</svg>
					Wits
				</label>
				<div class="advanced-search-row-content js-advanced-search-duplicant">
					<div class="form-row-content-band js-advanced-search-duplicant-template">

						<label class="visuallyhidden" for="wits_mode">Wits requirement</label>
						<select name="wits_mode" id="wits_mode" class="form-input auto small-select">
							<option value="=">equal to</option>
							<option value="<">less than</option>
							<option value=">">greater than</option>
							<option value="<=">less than or equal to</option>
							<option value=">=">greater than or equal to</option>
							<option value="!=">not equal to</option>
						</select>

						<label class="visuallyhidden" for="w">Wits value</label>
						<input type="number" name="w" id="w" class="form-input auto small-select" placeholder="Any value, e.g. “2”" pattern="d*">
					</div>
					<p class="form-row-tip js-advanced-search-row-tip">Restrict cards based on their wits.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="alchemy">
					<svg focusable="false" aria-hidden="true" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.12 21h15v5c0 .551-.45 1-1 1h-14c-.55 0-1-.449-1-1v-5h1zm0-19.001h14c.55 0 1 .45 1 1.001v16.342h-16V3c0-.551.45-1.001 1-1.001zM26.12 14h3c.55 0 1 .448 1 1v14c0 .552-.45 1-1 1h-23c-.55 0-1-.448-1-1h12c1.66 0 3-1.343 3-3V14h6zm-20 18h23c1.66 0 3-1.343 3-3V15a2.995 2.995 0 0 0-3-2.999h-9V3c0-1.656-1.34-3-3-3h-14c-1.66 0-3 1.344-3 3v23c0 1.657 1.34 3 3 3 0 1.657 1.34 3 3 3zM23.83 5.293l-1.42 1.414L24.706 9l2.415 2.414L29.537 9l2.294-2.293-1.42-1.414-2.29 2.292V5c0-2.761-2.24-5-5-5h-2v2h2c1.65 0 3 1.346 3 3v2.585l-2.29-2.292h-.001z"></path>
					</svg>
					Alchemy
				</label>
				<div class="advanced-search-row-content js-advanced-search-duplicant">
					<div class="form-row-content-band js-advanced-search-duplicant-template">

						<label class="visuallyhidden" for="alchemy_mode">Alchemy requirement</label>
						<select name="alchemy_mode" id="alchemy_mode" class="form-input auto small-select">
							<option value="=">equal to</option>
							<option value="<">less than</option>
							<option value=">">greater than</option>
							<option value="<=">less than or equal to</option>
							<option value=">=">greater than or equal to</option>
							<option value="!=">not equal to</option>
						</select>

						<label class="visuallyhidden" for="a">Alchemy value</label>
						<input type="number" name="a" id="a" class="form-input auto small-select" placeholder="Any value, e.g. “2”" pattern="d*">
					</div>				
					<p class="form-row-tip js-advanced-search-row-tip">Restrict cards based on their alchemy.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="e[]">
					<svg focusable="false" aria-hidden="true" width="33" height="25" viewBox="0 0 33 25" xmlns="http://www.w3.org/2000/svg">
						<path d="M25.788 18H8.561l-1.996-6-.665-2-1-3h1.555l1 3 .666 2 1 3h17.222l.998 3h-1.553zm-.447 5.001H6.561L2.89 12h1.564l2.666 8h17.223l.998 3.001zM27.788 13H10.561l-.333-1-.668-2-1.001-3-.667-2-1.001-3h18.79l3.67 11h-1.563zM4.121 0l1.667 5H2.121l1.667 5H.121l5 15h23l-1.666-5h3.666l-1.666-5h3.666l-5-15h-23z" fill-rule="evenodd"></path>
					</svg>
					Sets
				</label>

				<div class="form-row-content">
					<div class="form-row-content-band">
						<select name="e[]" id="e[]" multiple="" data-component="advanced-search-autocomplete" data-placeholder="Enter a set or choose from the list" data-allow-entry="true" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
							<option data-pol="+" data-item="Any" value="">Any</option>
							<option data-pol="+" data-item="Premier Edition" value="Premier Edition">Premier Edition (FMA)</option>
							<option data-pol="+" data-item="Blood & Water" value="Blood & Water">Blood & Water (BW)</option>
							<option data-pol="+" data-item="Artificial Human" value="Artificial Human">Artificial Human (AH)</option>
							<option data-pol="+" data-item="A Hero's Passing" value="A Hero\'s Passing">A Hero's Passing (HP)</option>
							<option data-pol="+" data-item="Alchemist's Gate" value="Alchemist\'s Gate">Alchemist's Gate (AG)</option>
							<option data-pol="+" data-item="Seven Deadly Sins" value="Seven Deadly Sins">Seven Deadly Sins (SDS)</option>
							<option data-pol="+" data-item="Sacrifice" value="Sacrifice">Sacrifice (SAC)</option>
							<option data-pol="+" data-item="Alchemist's Brotherhood" value="Alchemist\'s Brotherhood">Alchemist's Brotherhood (FC)</option>
							<option data-pol="+" data-item="Holiday Promo" value="Holiday Promo">Holiday Promo (HOL)</option>
							<option data-pol="+" data-item="Organised Play Promo" value="Organised Play Promo">Organised Play Promo (HD/OP)</option>
							<option data-pol="+" data-item="Player's Choice" value="Player\'s Choice">Player's Choice (PC)</option>
							<option data-pol="+" data-item="Promo" value="Promo">Promo (SIG/TR)</option>
						</select>
					</div>

					<p class="form-row-tip js-advanced-search-row-tip">Restrict cards based on their set.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label short" for="r[]">
					<svg focusable="false" aria-hidden="true" width="32" height="31" viewBox="0 0 32 31" xmlns="http://www.w3.org/2000/svg">
						<path d="M22 17.24l-1.21.87.49 1.41 2.65 7.78-6.79-4.91-1.14-.82-1.14.82-6.79 4.91 2.65-7.78.49-1.41-1.21-.87-5.93-4.29H13l.46-1.34L16 4.05l2.58 7.56.42 1.34h8.89L22 17.24zm9-6.29H20.44L16.92.67a1 1 0 0 0-1.85 0l-3.51 10.28H1a1 1 0 0 0-.57 1.82l8.45 6.1L5.2 29.6a1 1 0 0 0 1.5 1.14l9.3-6.72 9.29 6.72a1 1 0 0 0 1.5-1.14l-3.65-10.73 8.45-6.1a1 1 0 0 0-.59-1.82z" fill-rule="evenodd"></path>
					</svg>
					Rarity
				</label>
			
				<div class="form-row-content">
					<div class="form-row-content-band">
						<select name="r[]" id="r[]" multiple="" data-component="advanced-search-autocomplete" data-placeholder="Enter a rarity or choose from the list" data-allow-entry="true" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
							<option data-pol="+" data-item="Any" value="">Any</option>
							<option data-pol="+" data-item="Common" value="Common">Common</option>
							<option data-pol="+" data-item="Uncommon" value="Uncommon">Uncommon</option>
							<option data-pol="+" data-item="Rare" value="Rare">Rare</option>
							<option data-pol="+" data-item="Fixed" value="Fixed">Fixed</option>
							<option data-pol="+" data-item="Chase" value="Chase">Chase</option>
							<option data-pol="+" data-item="Transmute" value="Transmute">Transmute</option>
							<option data-pol="+" data-item="Filmstrip" value="Filmstrip">Filmstrip Exclusive</option>
							<option data-pol="+" data-item="Promo" value="Promo">Promo</option>
							<option data-pol="+" data-item="Signed" value="Signed">Signed</option>
						</select>
					</div>
					<p class="form-row-tip">Enter any rarity to match. Click the "IS" or "NOT" button to toggle between including and excluding a rarity.</p>
				</div>
			</div>

			<div class="form-row">
				<label class="form-row-label" for="flavor">
					<svg focusable="false" aria-hidden="true" width="33" height="28" viewBox="0 0 33 28" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.794 25.16l.847-.85-.347-1.15A4.001 4.001 0 0 1 10.121 18c2.206 0 4 1.79 4 4s-1.794 4-4 4H4.949l.845-.84zm9.626-13.08l1.18-.897 4.34 4.34-.895 1.177c-.5.66-1.712 1.21-2.648 1.21-.094 0-.183 0-.263-.01l-1.06-.16c-.75-.1-1.59-.94-1.697-1.69l-.152-1.06c-.13-.91.462-2.36 1.195-2.91zm11.924-9.07c.779-.59 1.712-.94 2.128-.97.206.11.498.4.614.61-.032.34-.31 1.25-.973 2.13l-7.565 9.943-4.15-4.148 9.946-7.565zM10.12 28a6.002 6.002 0 0 0 5.537-8.312c.044.008.088.026.133.032l1.06.16c.177.02.359.03.546.03 1.539 0 3.349-.83 4.24-2l9.068-11.92c.999-1.32 1.59-3.06 1.316-3.89-.275-.83-1.175-1.72-2-2a1.413 1.413 0 0 0-.481-.07c-.913 0-2.312.55-3.407 1.39l-11.924 9.06c-1.313 1-2.197 3.16-1.964 4.79l.152 1.06c.006.045.023.088.032.132a6.002 6.002 0 0 0-8.049 7.278L.119 28H10.12z" fill-rule="evenodd"></path>
					</svg>
					Flavor Text
				</label>
				<div class="form-row-content">
					<div class="form-row-content-band">
						<input type="text" name="v" id="v" class="form-input" placeholder="Any flavor text, e.g. “Brother”" autocorrect="off" spellcheck="false">
					</div>
					<fieldset>
						<div class="form-row-content-band short">
							<label class="visuallyhidden" for="flavorComparison">Flavor Comparison</label>
							<select class="form-input auto" name="flavorComparison" id="flavorComparison">
								<option value="All">All of these words</option>
								<option value="Any">Any of these words</option>
								<option value="Exact">This exact phrase</option>
							</select>
						</div>
					</fieldset>
					<p class="form-row-tip">
						Enter a word or phrase that should appear in the flavor text.
					</p>
				</div>
			</div>

			<!--Sets output style-->
			<div class="form-row">
				<label class="form-row-label">
					<svg focusable="false" aria-hidden="true" width="33" height="32" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.66 4.77l-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h1.44l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22zm2.86-1.72H6.58L5.68.42A.587.587 0 0 0 5.12 0c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13zm-5.86 12.5h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.89-2.63a.598.598 0 0 0-.57-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zm3.29 11.37h1.07l.35-1.02.04-.12.04.12.35 1.02h1.44l-.29.22-.85.66.34 1.01.15.42-.26-.2-.92-.7-.92.7-.26.2.15-.42.34-1.01-.85-.66-.29-.22h.37zm-3.29-.37l2.3 1.78-1.09 3.2c-.16.44.18.84.56.84.12 0 .24-.04.36-.12l2.62-2.03 2.63 2.03c.11.08.23.12.35.12.38 0 .72-.4.56-.84l-1.09-3.2 2.3-1.78c.47-.36.23-1.13-.35-1.13H6.58l-.9-2.63a.587.587 0 0 0-.56-.42c-.23 0-.47.14-.56.42l-.9 2.63H.72c-.58 0-.82.77-.35 1.13zM12.121 7h20V5h-20v2zm0 11h20v-2h-20v2zm0 11h20v-2h-20v2z" fill-rule="evenodd"></path>
					</svg>
					Preferences
				</label>
			
				<div class="form-row-content">
					<div class="form-row-content-band">
						<label class="visuallyhidden" for="as">Display</label>
						<select class="form-input auto" name="as" id="as">
							<option value="imageSearch">Display as Images</option>
							<option value="checklistSearch">Display as Checklist</option>
<!--
							<option value="textSearch">Display as Text Only</option>
							<option value="fullSearch">Display as Full</option>
-->							
						</select>

						<!-- Sort Format -->
<!--						
						<label class="visuallyhidden" for="order">Order</label>
						<select class="form-input auto" name="order" id="order">
							<option value="name">Sort by Name</option>
							<option value="released">Sort by Release Date</option>
							<option value="set">Sort by Set/Number</option>
							<option value="rarity">Sort by Rarity</option>
							<option value="faction">Sort by Faction</option>
							<option value="cost">Sort by Cost</option>
							<option value="power">Sort by Strength</option>
							<option value="toughness">Sort by Wits</option>
							<option value="power">Sort by Alchemy</option>
						</select>
-->
					</div>

<!--		
					<div class="form-row-content-band">
						<label class="advanced-search-checkbox" for="unroll_search">
							<input type="checkbox" name="unroll_search" id="unroll_search" value="1">
							Show all card prints
						</label>
					</div>
-->
				</div>
			</div>
			<div class="form-row advanced-search-submit-bottom">
				<div class="form-row-label"></div>
				<button type="submit" class="button-n submit-n">Search with these options</button>
			</div>
		</div>
		
	</form>
</div>

<?php

include "footer.html";

?>

<script src="js/advancedSearch.js"></script>

</body>

</html>
