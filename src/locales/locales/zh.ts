const locale: Record<string, string> = {
  'editor.remove': '删除',
  'editor.copy': '复制',
  'editor.words': '单词',
  'editor.characters': '字符',
  'editor.default': '默认',
  'editor.recent': '最近使用',
  'editor.moremark': '更多文本样式',
  'editor.nofill': '无填充色',
  'editor.format': '格式刷',
  'editor.draghandle.tooltip': '可拖拽和点击',
  'editor.copyToClipboard': '复制到剪切板',
  'editor.importWrod.tooltip': '导入Word',
  'editor.slash': "输入 '/' 唤起更多",
  'editor.slash.empty': '暂无搜索结果',
  'editor.slash.format': '格式',
  'editor.slash.insert': '插入',
  'editor.slash.embed': '嵌入第三方服务',
  'editor.content': '请输入正文',
  'editor.size.small.tooltip': '小尺寸',
  'editor.size.medium.tooltip': '中等尺寸',
  'editor.size.large.tooltip': '铺满',
  'editor.bold.tooltip': '粗体',
  'editor.italic.tooltip': '斜体',
  'editor.underline.tooltip': '下划线',
  'editor.strike.tooltip': '删除线',
  'editor.color.tooltip': '文本颜色',
  'editor.color.more': '更多颜色',
  'editor.lineheight.tooltip': '行高',
  'editor.highlight.tooltip': '文本高亮',
  'editor.heading.tooltip': '正文与标题',
  'editor.heading.h1.tooltip': '标题 1',
  'editor.heading.h2.tooltip': '标题 2',
  'editor.heading.h3.tooltip': '标题 3',
  'editor.heading.h4.tooltip': '标题 4',
  'editor.heading.h5.tooltip': '标题 5',
  'editor.heading.h6.tooltip': '标题 6',
  'editor.paragraph.tooltip': '正文',
  'editor.textalign.tooltip': '对齐方式',
  'editor.textalign.left.tooltip': '左对齐',
  'editor.textalign.center.tooltip': '居中对齐',
  'editor.textalign.right.tooltip': '右对齐',
  'editor.textalign.justify.tooltip': '两端对齐',
  'editor.fontFamily.tooltip': '字体',
  'editor.fontSize.tooltip': '字号调整',
  'editor.fontSize.default.tooltip': '默认字号',
  'editor.superscript.tooltip': '上标',
  'editor.subscript.tooltip': '下标',
  'editor.bulletlist.tooltip': '无序列表',
  'editor.orderedlist.tooltip': '有序列表',
  'editor.tasklist.tooltip': '任务列表',
  'editor.indent': '缩进调整',
  'editor.indent.tooltip': '增加缩进',
  'editor.outdent.tooltip': '减少缩进',
  'editor.columns.tooltip': '分栏',
  'editor.link.tooltip': '网络链接',
  'editor.link.unlink.tooltip': '取消链接',
  'editor.link.open.tooltip': '打开链接',
  'editor.link.edit.tooltip': '编辑链接',
  'editor.link.dialog.title': '插入链接',
  'editor.link.dialog.link': '链接',
  'editor.link.dialog.text': '文本',
  'editor.link.dialog.openInNewTab': '是否在新窗口打开',
  'editor.link.dialog.link.placeholder': '链接地址',
  'editor.link.dialog.text.placeholder': '添加描述',
  'editor.link.dialog.button.apply': '应用',
  'editor.image.tooltip': '图片',
  'editor.image.dragger.tooltip': '点击或者拖动图片到该区域来上传',
  'editor.image.float.left.tooltip': '左浮动',
  'editor.image.float.none.tooltip': '无浮动',
  'editor.image.float.right.tooltip': '右浮动',
  'editor.image.dialog.title': '插入图片',
  'editor.image.dialog.tab.url': '网络图片',
  'editor.image.dialog.tab.upload': '上传',
  'editor.image.dialog.uploading': '正在上传',
  'editor.image.dialog.form.link': '链接',
  'editor.image.dialog.placeholder': '请输入图片链接',
  'editor.image.dialog.form.alt': '说明',
  'editor.image.dialog.form.aspectRatio': '锁定原有长宽比',
  'editor.image.dialog.form.file': '文件',
  'editor.image.dialog.button.apply': '应用',
  'editor.video.tooltip': '视频',
  'editor.video.dialog.tab.upload': '上传',
  'editor.video.dialog.uploading': '正在上传',
  'editor.video.dialog.title': '插入视频',
  'editor.video.dialog.link': '网络链接',
  'editor.video.dialog.placeholder': '请输入链接地址',
  'editor.video.dialog.button.apply': '应用',
  'editor.table.tooltip': '表格',
  'editor.table.menu.insert_table': '插入表格',
  'editor.table.menu.insert_table.with_header_row': '带标题行',
  'editor.table.menu.add_column_before': '向左插入一列',
  'editor.table.menu.add_column_after': '向右插入一列',
  'editor.table.menu.delete_column': '删除列',
  'editor.table.menu.add_row_before': '向上插入一行',
  'editor.table.menu.add_row_after': '向下插入一行',
  'editor.table.menu.delete_row': '删除行',
  'editor.table.menu.merge_or_split_cells': '合并或拆分单元格',
  'editor.table.menu.delete_table': '删除表格',
  'editor.blockquote.tooltip': '引用',
  'editor.horizontalrule.tooltip': '分隔线',
  'editor.code.tooltip': '代码',
  'editor.codeblock.tooltip': '代码块',
  'editor.clear.tooltip': '清除格式',
  'editor.undo.tooltip': '撤销',
  'editor.redo.tooltip': '重做',
  'editor.fullscreen.tooltip.fullscreen': '全屏',
  'editor.fullscreen.tooltip.exit': '退出全屏',
  'editor.imageUpload.fileTypeNotSupported': '图片类型不支持',
  'editor.imageUpload.fileSizeTooBig': '图片大小不支持, 最大',
  'editor.table.mergeCells': '合并单元格',
  'editor.table.splitCells': '拆分单元格',
  'editor.table.delete': '删除表格',
  'editor.table.setCellsBgColor': '设置单元格背景颜色',
  'editor.table.insertColumnLeft': '向前插入列',
  'editor.table.insertColumnRight': '向后插入列',
  'editor.table.deleteColumn': '删除列',
  'editor.table.insertRowAbove': '向上插入列',
  'editor.table.insertRowBelow': '向下插入列',
  'editor.table.deleteRow': '删除行',
}

export default locale
