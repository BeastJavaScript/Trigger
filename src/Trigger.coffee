class Trigger
	constructor:->
		@_trigger=[]
		@listeners={}


	addListener:(event,callback,context=null)->
		unless @_trigger[event] instanceof Array
			@_trigger[event]=[]
		callback=callback.bind(context)
		@_trigger[event].push(callback)

	trigger:(event,data...)->
		if typeof @_trigger[event] isnt "undefined" and @_trigger[event] instanceof Array
			for func in @_trigger[event]
				func.apply(null,data)

	@getInstance:->
		@getMaster()
		

	@getMaster:->
		master = process||window
		if typeof master.beast is "undefined"
			master.beast={}
			master.beast.trigger=new Trigger()
		master.beast.trigger


