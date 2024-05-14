let template = `
{{#elements}}
{{^id}}
<div class="faculty-header">
<h2>{{faculty}}</h2>
</div>
{{/id}}
{{#id}}
<div class="card hoverable" data-id="{{id}}" data-faculty="{{faculty}}">
	<div class="card-content">
		<div class="education-levels">
		{{#education_levels}}
			<div data-level="{{name}}" class="education-level">
				{{#forms}}
				<div class="education-form">{{name}}</div>
				{{/forms}}
			</div>
		{{/education_levels}}
		</div>
		<div class="title">{{profile}}</div>
		<div class="subtitle"><span class="code">{{education_levels.0.code}}</span> {{speciality}}</div>
		<div class="requirements">
			<div class="section-title">
				Необходимые предметы ЕГЭ
			</div>
			<div class="requirements">
				{{#requirements}}
				<div class="requirement {{classname}}">{{name}} <span class="min">min баллов: {{min}}</span></div>
				{{/requirements}}
			</div>
		</div>
		<div class="numbers">
			<div class="number number-free">
				<div class="section-title">Бюджетных мест</div>
				<div class="number-value">{{education_levels.0.forms.0.vacations.free.total}}</div>
			</div>
			<div class="number number-paid">
				<div class="section-title">Контрактных мест</div>
				<div class="number-value">{{education_levels.0.forms.0.vacations.paid.total}}</div>
			</div>
			<div class="number number-duration">
				<div class="section-title">Продолжительность</div>
				<div class="number-value">{{education_levels.0.forms.0.duration}}</div>
			</div>
			<div class="number number-cost">
				<div class="section-title">Стоимость контракта</div>
				<div class="number-value">{{price}} ₽/год</div>
			</div>
		</div>
		{{#note}}
		<div class="note">
		* {{.}}
		</div>
		{{/note}}
	</div>
</div>
{{/id}}
{{/elements}}
{{^elements}}
	К сожалению, нет направлений, соответствующих выбранным вами параметрам
{{/elements}}
`

export default template;