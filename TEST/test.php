

<?php

//Setup header bar and css layout
include "head.html";
include "Skip_links.html";
include "header.html";

?>

<html>

<body>

<div id="main" class="main" role="main">
	<svg aria-hidden="true" focusable="false" class="sprite-set">
		<symbol id="sets-default-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 896 1024"><path d="M872.371 710.502c-11.085-11.962-22.915-20.646-34.278-29.068-18.026-13.35-33.488-24.76-40.125-45.049-26.827-109.237-78.594-226.06-118.253-299.411-3.284-14.594-4.284-30.097-5.1-45.145-.092-.382-1.002-14.761-1.096-16.268.094-1.388.466-7.369.466-7.465 0-13.565-3.82-22.895-11.201-28.686-12.459-9.832-28.201-3.852-33.278-1.888-8.103 2.99-17.394 1.603-28.201 0 .442 0-54.306-6.436-54.306-6.436.075 0-32.299-2.799-32.299-2.799-13.554 0-23.473 11.962-26.851 23.158a11.486 11.486 0 0 0-.536 2.249l-.814 5.335c-.186.836-.186 1.674-.186 2.512.092 8.612 3.912 16.172 10.641 20.837l13.367 9.163c-.092-.096 18.026 12.633 23.195 16.174 6.915 8.97 10.107 16.722 10.107 25.598v.382c-1.63 2.441-4.192 6.627-4.192 6.627-9.641 15.336-18.63 29.739-29.459 40.934-.466.575-3.913 4.497-3.913 4.497-3.004 3.183-8.009 8.494-9.477 17.944a10.983 10.983 0 0 0-.258 2.321c0 8.803 4.448 17.01 11.085 25.144-7.451-7.847-16.09-14.02-24.102-15.981-9.827-2.321-19.19.742-25.011 8.325-1 1.314-2.19 3.446-2.724 4.953-3.098 8.972-5.823 14.379-7.825 17.942l-.652-.191c-5.985-10.837-28.365-50.743-28.365-50.743-58.032-105.602-86.419-151.871-113.806-150.938-44.129 5.239-75.59 2.895-122.257-1.674a21.58 21.58 0 0 0-3.541 0c-16.37 1.865-35.302 24.856-35.302 38.422v2.319c0 7.489 5.356 13.925 12.645 14.954l2.282.287c34.022 4.76 36.84 16.819 36.84 30.838 0 0-.186 3.183-.372 5.144-8.825 34.666-18.28 53.639-27.199 68.782-1.374 2.345-2.446 6.34-2.446 9.068 0 11.387 9.361 20.55 19.818 27.01-2.632-.573-5.449-1.505-7.825-1.604-15.276-.741-21.726 8.518-23.823 12.442-.464.836-1.094 2.512-1.374 3.348-18.28 58.783-39.286 118.521-66.043 187.662-1.094 1.865-5.543 9.068-5.543 9.068-17.838 29.713-34.558 57.656-67.859 73.184-2.376 1.126-5.379 3.637-6.917 5.791C2.096 735.263.001 741.89.001 748.9c0 7.107 2.19 14.02 6.195 19.451 7.101 9.521 18.652 13.087 29.387 8.972 1.444-.48 3.354-1.58 4.541-2.536 33.37-26.436 76.78-35.958 132.716-29.044 1.096.096 2.818.172 3.82.096 12.737-1.222 22.1-11.962 23.194-26.747.094-.172.186-2.608.186-2.608 0-15.432-8.359-27.657-20.818-30.839-.746-.191-1.469-.382-2.284-.478-5.728-.551-7.357-2.225-8.733-4.569-.278-3.183-1.722-21.485-1.722-21.485 0-45.049 19.002-100.577 58.126-169.527.906-1.411.906-1.029 1.256-2.632l1.934-10.551c.075-.573.075-.838.075-1.029 0-.287-.075-.287-.258-1.413l-.37-2.152c-.188-1.101-.538-2.321-1.004-3.35-2.91-7.296-10.083-13.923-18.372-19.258 13.645 2.608 25.661-.935 32.927-9.81l5.543-8.23 3.912-6.723 2.562-4.019 3.54-6.818c.374-.48.722-1.413.908-1.963 0 0 2.376-6.171 2.538-6.46 2.282.935 4.471 1.772 4.471 1.772C334.855 441.449 399.99 686.289 406.72 763.3v.191c0 13.087 7.383 25.503 18.654 30.264l14.904 1.029c3.096.287 1.932-.172 4.564-1.961l5.635-3.828 20.284-18.302 56.402-53.279c13.926-10.192 17.092-25.049 18.746-32.992.258-1.126.444-2.799.444-4.306 0-1.483-.186-2.992-.348-4.019l-.186-.551c-.094-.741-.374-1.222-.56-1.867-8.639-22.441-18.374-46.628-31.275-71.677-6.381-13.087-9.571-25.694-9.571-38.135 0-14.57 4.006-27.943 8.663-43.447 4.89-16.555 9.989-33.565 11.551-54.666v-1.125c0-1.318-.094-2.895-.28-4.019-1.91-8.518-7.009-17.393-13.46-25.24 1.352 1.41 1.91 2.895 3.54 4.21.186.191 2.282 2.152 2.282 2.152.186.097 15.184 9.714 15.184 9.714 2.282.742 11.457 3.277 19.188 1.029l.094-.096s0 .096-.094.096c1.91-.573 3.564-1.509 5.193-2.703 1.816-1.316 3.633-2.823 5.356-4.306 3.471.551 7.919 2.249 12.832 10.742 30.483 50.456 55.68 108.592 74.962 172.901 3.098 15.502 4.634 27.01 4.634 35.886 0 12.225-2.91 16.913-5.169 19.425l-5.1 4.499c-10.107 9.235-20.47 18.685-29.203 23.924-3.376 2.057-6.823 5.885-7.731 9.808l-.28 1.125c0-.193-1.91 12.798-1.91 12.798l5.915 17.944c5.729 7.105 14.554 10.286 26.105 9.426 2.912-.263 7.103-1.963 9.455-3.828 9.827-8.038 22.938-14.379 40.218-19.523 32.555-5.98 60.849-5.431 86.419-3.828 18.816 2.895 42.103 7.083 64.483 17.466.56.287 1.188.573 1.91.739 13.647 4.116 26.851.575 34.396-9.33.092 0 5.448-16.364 5.448-16.364l-4.074-15.408c-.746-2.439-.84-1.603-2.562-3.372zM62.136 638.536s3.004-4.857 4.378-7.202a4705.767 4705.767 0 0 0 21.564-57.274c-3.47-20.192-5.565-40.839-5.565-62.06 0-72.419 20.844-139.909 56.31-196.801-10.271-6.746-17-18.517-17-31.602v-2.321c0-25.982 28.643-57.849 54.748-60.935 0 0 8.105-.096 8.197-.096a1622.75 1622.75 0 0 0 35.21 3.181c60.571-48.782 136.721-78.232 219.578-78.232 75.87 0 146.198 24.666 204.136 66.342 14.834-.742 25.569 4.401 32.556 9.834 7.475 5.98 16.114 16.626 18.746 35.048C757.753 322.473 796.503 412.571 796.503 512c0 11.866-.626 23.637-1.722 35.241 9.197 27.177 17.372 54.857 24.102 82.036 3.47 10.382 11.201 17.775 23.567 27.296 15.462-45.312 24.009-93.926 24.009-144.573 0-241.85-191.563-438.577-426.904-438.577C204.235 73.423 12.649 270.15 12.649 512c0 55.887 10.387 109.165 28.925 158.403 7.195-9.619 13.645-20.361 20.562-31.867zm708.262 120.745c6.101 1.029 12.553 2.152 19.026 3.54-77.244 113.377-205.232 187.757-349.868 187.757-140.819 0-265.895-70.456-343.675-178.785 21.308-5.885 45.851-7.081 74.426-3.637-.186 0 8.453.193 8.453.193 1.724-.193 3.376-.645 5.007-1.029 64.947 68.687 155.559 111.488 255.788 111.488 102.977 0 195.683-45.409 260.888-117.373 25.755-3.637 48.857-3.374 69.955-2.154z"></path></symbol>
		<symbol id="sets-znr-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path fill="#000" d="M.291 6.184L7.287 0l3.559 4.028-6.996 6.184L.291 6.184zm27.929 0l-3.559 4.028-6.996-6.184L21.224 0l6.996 6.184zM0 22.183l3.254-3.066 5.378 7.504-2.447 2.152L0 22.184zm28.5 0l-3.254-3.066-5.378 7.504 2.447 2.152 6.185-6.589zm-2.07-7.684l-7.591.798-4.555 6.617-4.547-6.606-7.648-.804L14.284 32 26.43 14.499zM14.284 3.034L2.087 13.791l7.739.814 4.459-3.986 4.448 3.977 7.692-.809-12.14-10.752z"></path></symbol>
		<symbol id="sets-znc-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 32"><path d="M12.827 4.718C11.48 3.372 10.147 2.01 8.799.667c-2.188 1.54-4.222 3.342-5.83 5.492C1.462 8.209.458 10.624.001 13.123c.009.007.018.016.028.02 1.061.45 3.037 1.631 3.843 3.166.699 1.226.709 2.673.67 4.045.593-.606 1.197-1.199 1.79-1.8-.63-.661-1.285-1.296-1.926-1.943.641-.647 1.292-1.29 1.928-1.945-1.323-1.329-2.645-2.656-3.962-3.991 2.341-2.346 4.673-4.704 7.01-7.056 1.153 1.149 2.292 2.311 3.443 3.464.004-.79 0-1.579.002-2.367zm-3.449.308c1.154 1.159 2.315 2.312 3.449 3.491v5.277c-1.859 1.881-.928.942-2.792 2.817 1.866 1.871.935.933 2.792 2.813v5.301a434.375 434.375 0 01-3.449 3.473 2493.068 2493.068 0 01-5.609-5.657c1.316-1.333 2.635-2.66 3.957-3.985-.628-.668-1.306-1.286-1.924-1.962.657-.624 1.281-1.283 1.924-1.924a1862.623 1862.623 0 00-3.962-3.989c1.874-1.883 3.743-3.772 5.615-5.655zm.011 15.564c-.653.643-1.289 1.304-1.939 1.949.635.661 1.29 1.3 1.938 1.949.649-.641 1.283-1.3 1.932-1.943-.634-.663-1.298-1.292-1.93-1.955zM9.382 8.733c-.643.652-1.293 1.297-1.938 1.947.647.647 1.296 1.292 1.934 1.949.649-.647 1.302-1.292 1.938-1.953-.643-.649-1.282-1.303-1.934-1.943zM2.951 23.242c-.322.333-.645.665-.975.992l8.655 8.433h2.195v-6.524c-1.154 1.149-2.293 2.312-3.449 3.459-2.143-2.121-4.276-4.248-6.427-6.36zm23.098 0c-2.151 2.112-4.284 4.239-6.427 6.36-1.156-1.147-2.295-2.31-3.449-3.459v6.524h2.195l8.655-8.433a70.113 70.113 0 01-.975-.992zM19.618 8.733c-.652.64-1.29 1.294-1.934 1.943.636.661 1.288 1.306 1.938 1.953.637-.657 1.287-1.302 1.934-1.949-.645-.65-1.295-1.295-1.938-1.947zM19.61 20.59c-.632.663-1.296 1.292-1.93 1.955.649.643 1.283 1.302 1.932 1.943.647-.649 1.302-1.288 1.938-1.949-.651-.645-1.287-1.306-1.939-1.949zm.012-15.564c1.872 1.883 3.741 3.772 5.615 5.655a1862.623 1862.623 0 00-3.962 3.989c.643.641 1.267 1.3 1.924 1.924-.618.676-1.296 1.294-1.924 1.962a1144.57 1144.57 0 013.957 3.985 2720.764 2720.764 0 01-5.609 5.657 451.687 451.687 0 01-3.449-3.473v-5.301c1.857-1.879.927-.942 2.792-2.813-1.864-1.875-.933-.936-2.792-2.817V8.517c1.134-1.18 2.295-2.332 3.449-3.491zm-3.449-.308c.002.788-.002 1.577.002 2.367 1.151-1.153 2.29-2.315 3.443-3.464 2.337 2.352 4.67 4.71 7.01 7.056-1.317 1.335-2.639 2.662-3.962 3.991.636.655 1.287 1.298 1.928 1.945-.641.647-1.296 1.282-1.926 1.943.593.601 1.197 1.193 1.79 1.8-.039-1.372-.029-2.819.67-4.045.806-1.535 2.782-2.716 3.843-3.166.011-.005.019-.014.028-.02-.457-2.499-1.461-4.915-2.968-6.965-1.608-2.15-3.643-3.952-5.83-5.492-1.349 1.343-2.682 2.704-4.028 4.051z"></path></symbol>
		<symbol id="sets-zne-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 16"><path d="M5.353.009l.868 1.682.033 2.081 2.255 3.612c.297.863.24 1.75-.168 2.662.929-1.43 1.239-2.429.93-2.997-.309-.569-1.013-1.722-2.113-3.46l.008-1.937.712-1.643 4.649 7.556-4.649 8.425-.804-1.383.009-2.22-2.432-3.35c-.408-.691-.34-1.505.205-2.44-1.11 1.113-1.431 2.042-.964 2.787l2.236 3.189-.014 2.025-.76 1.392L.001 8 5.353.008z" fill="#000" fill-rule="nonzero"></path></symbol>
	</svg>

	<h1 class="visuallyhidden">Advanced Search</h1>
	
	<form class="form-layout advanced-search" action="searchTest.php">
		<div class="inner-flex">
			<div class="form-row">
				<label class="form-row-label" for="r">
					<svg focusable="false" aria-hidden="true" width="33" height="24" viewBox="0 0 33 24" xmlns="http://www.w3.org/2000/svg">
						<g fill-rule="evenodd">
							<path d="M2.12 5V3c0-.55.45-1 1-1h26c.55 0 1 .45 1 1v2h-28zm0 3h28V6h-28v2zm28 13c0 .55-.45 1-1 1h-26c-.55 0-1-.45-1-1V9h28v12zm-1-21h-26c-1.66 0-3 1.34-3 3v18c0 1.66 1.34 3 3 3h26c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3z"></path>
							<path d="M17.121 18h10v-1h-10v1zm0-3h10v-1h-10v1zM5.12 21c.03-1.11.95-2 2.06-2h.44c.39 0 .75-.24.91-.6.16-.36.09-.79-.18-1.08-.75-.81-1.23-2.14-1.23-3.38 0-1.79.98-2.94 2.5-2.94s2.5 1.15 2.5 2.94c0 1.24-.48 2.57-1.23 3.38-.27.29-.34.72-.18 1.08.16.36.52.6.91.6h.44c1.11 0 2.03.89 2.06 2h.995a3.057 3.057 0 0 0-3.054-3h-.44c.91-.98 1.5-2.54 1.5-4.06 0-2.49-1.57-3.94-3.5-3.94s-3.5 1.45-3.5 3.94c0 1.52.59 3.08 1.5 4.06h-.44a3.057 3.057 0 0 0-3.054 3h.994-.001z"></path>
						</g>
					</svg>
				Test
				</label>
				<div class="form-row-content">
					<div class="form-row-content-band">
						<select name="r[]" id="r" multiple="" data-component="advanced-search-autocomplete" data-placeholder="Enter a rarity or choose from the list" data-allow-entry="true" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
							<optgroup label="Types">
								<option data-pol="+" data-item="artifact" value="artifact">Artifact</option>
								<option data-pol="+" data-item="conspiracy" value="conspiracy">Conspiracy</option>
								<option data-pol="+" data-item="creature" value="creature">Creature</option>
								<option data-pol="+" data-item="emblem" value="emblem">Emblem</option>
								<option data-pol="+" data-item="enchantment" value="enchantment">Enchantment</option>
								<option data-pol="+" data-item="hero" value="hero">Hero</option>
								<option data-pol="+" data-item="instant" value="instant">Instant</option>
								<option data-pol="+" data-item="land" value="land">Land</option>
								<option data-pol="+" data-item="phenomenon" value="phenomenon">Phenomenon</option>
								<option data-pol="+" data-item="plane" value="plane">Plane</option>
								<option data-pol="+" data-item="planeswalker" value="planeswalker">Planeswalker</option>
								<option data-pol="+" data-item="scheme" value="scheme">Scheme</option>
								<option data-pol="+" data-item="sorcery" value="sorcery">Sorcery</option>
								<option data-pol="+" data-item="tribal" value="tribal">Tribal</option>
								<option data-pol="+" data-item="vanguard" value="vanguard">Vanguard</option>
							</optgroup>
							<optgroup label="Supertypes">
								<option data-pol="+" data-item="basic" value="basic">Basic</option>
								<option data-pol="+" data-item="elite" value="elite">Elite</option>
								<option data-pol="+" data-item="legendary" value="legendary">Legendary</option>
								<option data-pol="+" data-item="ongoing" value="ongoing">Ongoing</option>
								<option data-pol="+" data-item="snow" value="snow">Snow</option>
								<option data-pol="+" data-item="token" value="token">Token</option>
								<option data-pol="+" data-item="world" value="world">World</option>
							</optgroup>
						</select>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>
	<script src="js/scryfallAdvancedSearch.js"></script>
</body>
</html>